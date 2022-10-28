<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <NachosTitle />
      <Calculator />
    </v-col>
  </v-row>
</template>

<script>
import Calculator from '@/components/calculator/Calculator'
import NachosTitle from '@/components/NachosTitle'

export default {
  name: 'Index',
  components: { Calculator, NachosTitle },
  mounted() {
    console.log("%chire me: andrabeje1@gmail.com", "color:red")
} 
}
</script>
