<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2 class="text-sm-h2 my-6 text-center">{{ $t('creator') }}</h2>
      <v-row>
        <v-col cols="12" offset='0' sm='10' offset-sm='1'>
          <CardNachos>
            <v-img
              class="white--text align-end"
              src="/img/hot-nacho.jpg"
            >
              <v-card-title
                >{{ $t('about-me.card1.title') }}</v-card-title
              >
            </v-img>
            <v-card-text class="text--primary">
              <div>{{ $t('about-me.card1.t1') }}</div>
              <div>{{ $t('about-me.card1.t2') }}</div> 
            </v-card-text>  
          </CardNachos> 
        </v-col>
      </v-row>
      <h2 class="text-sm-h2 my-6 text-center">{{ $t('our-values') }}</h2>
      <v-row>
        <v-col cols="12" sm='4'>
          <CardNachos class='mb-4'>
            <v-img class="white--text align-end" src="/img/1.jpg">
              <v-card-title>{{ $t('value1') }}</v-card-title>
            </v-img>
          </CardNachos>
          </v-col>
        <v-col cols="12" sm='4'>
          <CardNachos class='mb-4'>
            <v-img class="white--text align-end" src="/img/3.jpg">
              <v-card-title>{{ $t('value2') }}</v-card-title>
            </v-img>
          </CardNachos>
        </v-col>
        <v-col cols="12" sm='4'>
          <CardNachos class='mb-4'>
            <v-img class="white--text align-end" src="/img/2.jpg">
              <v-card-title>{{ $t('value3') }}</v-card-title>
            </v-img>
          </CardNachos>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols='12'>
          <CardNachos>
            <v-card-title class='justify-center'
            >{{ $t('they-talk-about-me') }}</v-card-title
            >
            <v-card-text class='text--primary' min-height='100%'>
              <div>
                <p class='mb-6 text-lg-body-1 text-center font-italic'>{{ $t('citation') }}</p>
              </div>
            </v-card-text>
          </CardNachos>
        </v-col>
      </v-row>
        <h2 class="text-sm-h2 my-6 text-center">{{ $t('they-use-it') }}</h2>
      <v-row>
        <v-col cols="12" sm='4'>
          <CardNachos class='mb-4'>
            <v-img class="white--text align-end" src="/img/4.jpg">
              <v-card-title>Random guy</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                <i
                  >{{ $t('quote1') }}</i
                >
              </div>
            </v-card-text>
          </CardNachos>
        </v-col>
        <v-col cols="12" sm='4'>
          <CardNachos class='mb-4'>
            <v-img class="white--text align-end" src="/img/5.jpg">
              <v-card-title>2 randoms guys</v-card-title>
            </v-img>
            <v-card-text class="text--primary" min-height="100%">
              <div>
                <i
                  >{{ $t('quote2') }}</i
                >
              </div>
            </v-card-text>
          </CardNachos>
        </v-col>
        <v-col cols="12" sm='4'>
          <CardNachos class='mb-4'>
            <v-img class="white--text align-end" src="/img/6.jpg">
              <v-card-title>3 random guys</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                <i
                  >{{ $t('quote3') }}</i
                >
              </div>
            </v-card-text>
          </CardNachos>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CardNachos from '../components/CardNachos';

export default {
  name: 'AboutMe',
  components: { CardNachos },
};
</script>
