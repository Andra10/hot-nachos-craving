<template>
  <CardNachos>
    <v-card-title class="result-title">
      {{ $t('calculator.card.result.title') }}
    </v-card-title>

    <v-card-text>
      <v-list color='transparent'>
        <v-list-item
            v-for='result in results' :key="result.id"
        >
          <v-list-item-avatar rounded left>
            <v-img :src="`food/${result.id}.svg`"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <p class="list-item font-weight-bold text-left align-center mb-0">
              {{ $t(result.id) }} :
              {{ Math.round(result.quantity + Number.EPSILON) }}
              {{ $tc(result.unit, Math.round(result.quantity + Number.EPSILON)) }}
            </p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <span class="infos-text">
          {{ $t('moreInfos.text') }}&nbsp<NuxtLink :to="localePath('/about-us')">{{ $t('moreInfos.link') }}</NuxtLink>
        </span>
      </v-card-actions>
    </v-card-text>
  </CardNachos>
</template>

<script>
import CardNachos from '@/components/CardNachos';

export default {
  name: 'CalculationResults',
  components: { CardNachos },
  props: {
    results: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

.result-title, .list-item, .infos-text{
font-weight: 300;
}
</style>