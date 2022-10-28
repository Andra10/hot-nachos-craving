import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_5db42cac from 'nuxt_plugin_plugin_5db42cac' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_runtimeappplugin11e2924c_e0dd0144 from 'nuxt_plugin_runtimeappplugin11e2924c_e0dd0144' // Source: ./runtime.app.plugin.11e2924c.mjs (mode: 'all')
import nuxt_plugin_pluginutils_d52f46ba from 'nuxt_plugin_pluginutils_d52f46ba' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_da7765a4 from 'nuxt_plugin_pluginrouting_da7765a4' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_03655d01 from 'nuxt_plugin_pluginmain_03655d01' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_workbox_4526f898 from 'nuxt_plugin_workbox_4526f898' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_909e5272 from 'nuxt_plugin_metaplugin_909e5272' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_axios_5ffed498 from 'nuxt_plugin_axios_5ffed498' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_capilegacyplugin_57c906db from 'nuxt_plugin_capilegacyplugin_57c906db' // Source: ../node_modules/@nuxt/bridge/dist/runtime/capi.legacy.plugin.mjs (mode: 'all')
import nuxt_plugin_capiplugin_00dbe1fb from 'nuxt_plugin_capiplugin_00dbe1fb' // Source: ./capi.plugin.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s","title":"Hot Nachos Craving | Calculate how much nachos you need","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Hot Nachos Craving is the first online calculator that helps you to have the perfect amount of nachos at your parties"},{"hid":"og:description","name":"og:description","content":"Hot Nachos Craving is the first online calculator that helps you to have the perfect amount of nachos at your parties"},{"hid":"og:title","name":"og:title","content":"How much nachos are you craving?"},{"hid":"og:site_name","name":"og:site_name","content":"How much nachos gringos?"},{"hid":"og:image","name":"og:image","content":"\u002Fnachos-icon.png"},{"name":"format-detection","content":"telephone=no"},{"name":"google-site-verification","content":"4HAdqAwqavgSyg5VihoVVCtvL4_YBAvCFlrLuRs9U_I"}],"link":[{"rel":"icon","type":"image\u002Fpng","href":"\u002Fnachos-icon.png"}],"script":[{"src":"\u002Fanal\u002Fytics.js","defer":true,"data-domain":"hot-nacho-craving","data-api":"\u002Fanal\u002Fytics\u002Fapi\u002Fevent"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_5db42cac === 'function') {
    await nuxt_plugin_plugin_5db42cac(app.context, inject)
  }

  if (typeof nuxt_plugin_runtimeappplugin11e2924c_e0dd0144 === 'function') {
    await nuxt_plugin_runtimeappplugin11e2924c_e0dd0144(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_d52f46ba === 'function') {
    await nuxt_plugin_pluginutils_d52f46ba(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_da7765a4 === 'function') {
    await nuxt_plugin_pluginrouting_da7765a4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_03655d01 === 'function') {
    await nuxt_plugin_pluginmain_03655d01(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_4526f898 === 'function') {
    await nuxt_plugin_workbox_4526f898(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_909e5272 === 'function') {
    await nuxt_plugin_metaplugin_909e5272(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5ffed498 === 'function') {
    await nuxt_plugin_axios_5ffed498(app.context, inject)
  }

  if (typeof nuxt_plugin_capilegacyplugin_57c906db === 'function') {
    await nuxt_plugin_capilegacyplugin_57c906db(app.context, inject)
  }

  if (typeof nuxt_plugin_capiplugin_00dbe1fb === 'function') {
    await nuxt_plugin_capiplugin_00dbe1fb(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
