<template>
  <v-footer class="custom-footer">
      <v-row class="text-center" justify="center" no-gutters>
          <v-col cols="12">
              © {{ currentYear }} - Mi Portfolio. Todos los derechos reservados.
          </v-col>
      </v-row>
  </v-footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
  computed: {
      currentYear(): number {
          return new Date().getFullYear();
      }
  }
}
</script>

<style scoped>
.custom-footer {
  padding: 0px 12px; /* Aún más compacto */
  font-size: 0.8rem; /* Reducir el tamaño de fuente si lo consideras necesario */
  
}
</style>
