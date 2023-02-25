<template>
    <v-row justify="center" align="center">
      <v-col >
        <h1 class="nachos-title mt-2 text-md-h3 text-xl-h1 text-center">{{ $t('header-title') }}</h1>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: "NachosTitle"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
.nachos-title.mt-2
{
  font-size: 60px;
  color: #3f51b5;
  font-family: 'Staatliches', cursive !important;
}
</style>
