<template>
  <v-snackbar
    v-model="show"
    vertical
    :timeout="-1"
    outlined
    rounded
    bottom
    color="yellow-lighten-2"
    :right='!isMobile'
    :transition="transition"
  >
    <span class="cookie-consent-message">
      {{ $t('cookie.message') }}
    </span>

    <template v-slot:action="{ attrs }">
      <v-row no-gutters>
        <v-col>
          <ButtonNachos v-bind="attrs" size="x-small" class="ma-2" @click="leave">
            {{ $t('cookie.refuse') }}
          </ButtonNachos>
        </v-col>
        <v-col>
          <ButtonNachos v-bind="attrs" size="x-small" class="ma-2" @click="dismiss">
            {{ $t('cookie.accept') }}
          </ButtonNachos>
        </v-col>
      </v-row>
    </template>
  </v-snackbar>
</template>

<script>
import ButtonNachos from '@/components/ButtonNachos';

export default {
  name: 'CookieConsent',
  components: { ButtonNachos },
  data() {
    return {
      show: undefined,
    };
  },
  computed: {
    cookie() {
      return !this.getCookie('cookie-nachosos');
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    transition() {
      return this.isMobile ? 'slide-y-reverse-transition' : 'fade-transition';
    }
  },
  beforeMount() {
    setTimeout(() => {
      this.show = this.cookie;
    }, 1000);
  },
  methods: {
    dismiss() {
      this.show = false;
      const exdate = new Date();
      exdate.setDate(exdate.getDate() + 365);
      const cookie = [
        `cookie-nachosos=1`,
        `expires=${exdate.toUTCString()}`,
        `path=/`,
      ];
      document.cookie = cookie.join(';');
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      return parts.length !== 2 ? undefined : parts.pop().split(';').shift();
    },
    leave() {
      window.open('https://tasty.co/compilation/nachos-lovers-only', '_blank');
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

.cookie-consent-message, .ma-2 {
  font-family: 'Staatliches', cursive, !important;
}
</style>