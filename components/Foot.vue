<template>
  <v-footer dark padless app absolute>
    <v-card flat tile class="indigo white-4--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px" color="yellow accent-2">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="foot-text pt-0 grey-lighten-5--text">
        {{ $t('footer.description') }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="light-blue accent-3 grey lighten-5--text foot">
        
        <NuxtLink :to="localePath('/about-us')" class="about-us">{{ $t('footer.about-us.link') }}</NuxtLink>
        -
        <span>{{ new Date().getFullYear() }}</span> - <strong>hot nacho craving</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Foot',
  data: () => ({
    icons: [
      {
        text: 'mdi-github',
        link: 'https://www.github.com/Andra10',
      },
      {
        text: 'mdi-web',
        link: 'https://portfolio-andra10.vercel.app/#/',
      },
      {
        text: 'mdi-linkedin',
        link: 'https://www.linkedin.com/Andra-Beje',
      },
      
      {
        text: 'mdi-gmail',
        link: 'mailto:andrabeje1@gmail.com'
      },
    ].filter((icon) => icon.link),
  }),
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
.v-card {
  width: 100%;
}

.foot, .foot-text {
  font-family: 'Staatliches', cursive !important;
  font-weight: 200;
}

.about-us{
  text-decoration: none;
  color: #FF0;
} 
</style>
