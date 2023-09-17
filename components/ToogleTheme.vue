<template>
    <v-btn @click="toggleTheme">
      <v-icon v-if="theme.global.current.value.dark" color="yellow">mdi-weather-night</v-icon>
      <v-icon v-else color="black">mdi-weather-sunny</v-icon>
    </v-btn>
  </template>
  
  <script lang="ts">
  import { useTheme } from 'vuetify'
  
  export default {
    name: 'ThemeToggleButton',
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
    background-color: transparent !important;
    color: inherit;
  }
  
  .v-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  </style>
  