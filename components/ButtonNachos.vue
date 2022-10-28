<template>
  <v-btn class="button-cheese" :x-large="size === 'x-large'" :x-small="size === 'x-small'" rounded color="yellow-lighten-2" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "ButtonNachos",
  props: {
    size: {
      type: String,
      default: () => 'x-large'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

.button-cheese  {
  border: 4px solid;
  color: #00b0c7 !important;
  font-family: 'Staatliches', cursive !important;
  font-weight: 400;
}

</style>
