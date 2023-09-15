<template>
  <v-app-bar>
    <!-- Título a la izquierda -->
    <v-toolbar-title>
      Mi Portfolio
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Opciones del nav al centro -->
    <v-btn text="" href="#">Inicio</v-btn>
    <v-btn text="" href="#">Proyectos</v-btn>
    <v-btn text="" href="#">Acerca de mí</v-btn>
    <v-btn text="" href="#">Contacto</v-btn>

    <v-spacer></v-spacer>

    <!-- Botón dark/light mode a la derecha -->
  <ToogleTheme></ToogleTheme>
  </v-app-bar>
</template>

<script lang="ts">
import ToogleTheme from '~/components/ToogleTheme.vue'


export default {
  name: 'Navbar',
  components: {
    ToogleTheme
  },
  setup() {
   
    return {
     
    }
  }
}
</script>

<style scoped>
/* Estilizar el botón para que tenga un poco más de espacio y un hover más notorio */
.v-btn {
  margin-left: 5px;
  margin-right: 5px;
  transition: background-color 0.3s;
}

.v-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
