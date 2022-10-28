<template>
  <v-col>
    <h2 class="capacity">{{ $t('capacity-slider.title') }}</h2>
    <v-row class="my-4 justify-center flex-nowrap">
      <v-slider
        v-model="hungriness"
        color="yellow accent-200"
        track-color="indigo"
        height="32"
        :min="0.7"
        :max="1.3"
        :step="0.01"
        hide-details
        @input="$emit('capacity-updated', hungriness)"
      >
        <!--Slider hungriness level-->

        <template #prepend>
          <h4 class="diet-text mt-2 text-small-h6">
            {{ $t('diet-slider-text') }}
          </h4>
        </template>
        <template #append>
          <h4 class="starve-text mt-2 text-small-h6">
            {{ $t('starve-slider-text') }}
          </h4>
        </template>
      </v-slider>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'CapacitySlider',
  data() {
    return {
      hungriness: 1,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
>>> .v-slider__thumb {
  height: 20px;
  width: 20px;
}

>>> .v-slider--horizontal .v-slider__track-container {
  height: 10px;
}

>>> .v-slider__thumb::before {
  left: -9px;
  top: -9px;
}

.v-input {
  align-items: center;
}

.diet-text, .starve-text, .capacity{
  font-family: 'Staatliches', cursive !important;
}
</style>
