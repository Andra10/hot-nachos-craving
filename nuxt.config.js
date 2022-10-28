import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  env: {
    dev: process.env.NODE_ENV !== 'production',
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  generate: {
    fallback: true,
  },
  bridge: {
    nitro: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: "Hot Nachos Craving | Calculate how much nachos you need",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Hot Nachos Craving is the first online calculator that helps you to have the perfect amount of nachos at your parties",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "Hot Nachos Craving is the first online calculator that helps you to have the perfect amount of nachos at your parties",
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: "How much nachos are you craving?",
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: "How much nachos gringos?",
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/nachos-icon.png',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'google-site-verification',
        content: '4HAdqAwqavgSyg5VihoVVCtvL4_YBAvCFlrLuRs9U_I',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/nachos-icon.png' }],
    script: [
      {
        src: '/anal/ytics.js',
        defer: true,
        'data-domain': 'hot-nacho-craving',
        'data-api': '/anal/ytics/api/event',
      },
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://vueuse.org/guide/
    '@vueuse/core/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  css: [
    '@/assets/main.css',
    '@/assets/mdi.css',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    breakpoint: {
      mobileBreakpoint: 'xs',
    },
    defaultAssets: false
  },

  i18n: {
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'lang/',
    skipSettingLocaleOnNavigate: false,
    detectBrowserLanguage: {
      useCookie: false,
    },
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English',
        iso: 'en-US',
      },
    ],
  },
});
