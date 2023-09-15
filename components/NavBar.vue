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
    <v-btn @click="toggleTheme">
      <v-icon v-if="theme.global.current.value.dark" color="yellow">mdi-weather-night</v-icon>
      <v-icon v-else color="black">mdi-weather-sunny</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { useTheme } from 'vuetify'

export default {
  name: 'Navbar',
  setup() {
    const theme = useTheme();

    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    }

    return {
      theme,
      toggleTheme
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
