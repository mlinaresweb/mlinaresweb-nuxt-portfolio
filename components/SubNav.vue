<template>
    <div class="subnav">
      <v-btn class="subnav-button" @click="navigate('habilidades')">Habilidades</v-btn>
      <v-btn class="subnav-button" @click="navigate('estudios')">Estudios</v-btn>
      <v-btn class="subnav-button" @click="navigate('trabajos')">Trabajos</v-btn>
      <v-btn class="subnav-button" @click="navigate('proyectos')">Proyectos</v-btn>
      <v-btn class="subnav-button" @click="navigate('github')">Github</v-btn>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigate(route) {
        this.$router.push({ name: route });
      }
    }
  }
  </script>
  
  <style scoped>
  .subnav {
    display: flex;
    justify-content: flex-end; 
    align-items: center;
    padding: 10px 0;
    gap: 10px; 
  }
  
  .subnav-button {
    margin: 0 5px; 
  }
  </style>
  