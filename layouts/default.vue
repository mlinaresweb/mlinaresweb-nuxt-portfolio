<template>
    <v-app>
      <NavBar />
      <v-main>
      <slot></slot>
      </v-main>
      <Footer></Footer>
    </v-app>
  </template>
  
<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
}
}
</script>

<style scoped>
/* Estilos generales del layout si los necesitas */
</style>