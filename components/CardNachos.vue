<template>
  <v-card v-bind="$attrs" :elevation='0' class="card-nachos" rounded="xl"  v-on="$listeners">
    <template v-for="(index, name) in $scopedSlots" #[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "CardNachos"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
.card-nachos.v-card {
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.35) 2px 5px 15px !important;
  font-family: 'Staatliches', cursive !important;
}
</style>
