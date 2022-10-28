<template>
  <v-col>
    <v-row class="justify-center flex-nowrap">
      <v-btn
      small
        fab
        dark
        color="#e91e63"
        class="numberOfPeoplePicker-button"
        @click="decrement"
      >
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>
      <span class="ma-2 text-h5" v-text="count"></span>
      <span class="ma-2 text-h5" v-text="$tc(label, count)"></span>
      <v-btn
      small
        fab
        dark
        color="#e91e63"
        class="numberOfPeoplePicker-button"
        @click="increment"
      >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'NumberOfPeoplePicker',
  props: {
    label: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    decrement() {
      if (this.count > 0) {
        this.$emit('count-updated', this.count - 1);
      }
    },
    increment() {
      this.$emit('count-updated', this.count + 1);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
.numberOfPeoplePicker-button {
  cursor: pointer;
  margin-top: 5px;
}

.ma-2 {
  font-family: 'Staatliches', cursive !important;
  font-weight: 200;
  
}


</style>
