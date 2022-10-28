<template>
  <v-row justify="center" align="center">
    <v-col cols="12" align="center">
      <NachosTitle />

      <h3 class='text-center my-12' v-if="error.statusCode === 404">
        {{ $t(pageNotFound) }}
      </h3>
      <h3 class='text-center my-12' v-else>
        {{ $t(otherError) }}
      </h3>

      <ButtonNachos class="btn-cheese" to='/'>{{ $t('backToNachos') }}</ButtonNachos>
    </v-col>
  </v-row>
</template>

<script>
import NachosTitle from '@/components/NachosTitle';
import ButtonNachos from '@/components/ButtonNachos';

export default {
  name: 'Error',
  components: { ButtonNachos, NachosTitle },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'pageNotFound',
      otherError: 'otherError'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? "The page doesn't exist" : 'Error'
    return {
      title
    }
  }
}
</script>

