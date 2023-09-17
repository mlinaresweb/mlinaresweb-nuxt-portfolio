<template>
    <div class="subnav-wrapper">
       <ToogleTheme class="theme-toggle"></ToogleTheme>
      <div class="subnav">
        <v-btn class="subnav-button" @click="navigate('index')">About</v-btn>
        <v-btn class="subnav-button" @click="navigate('skills')">Habilidades</v-btn>
        <v-btn class="subnav-button" @click="navigate('experencia')">Experencia</v-btn>
        <v-btn class="subnav-button" @click="navigate('proyectos')">Proyectos</v-btn>
        <v-btn class="subnav-button" @click="navigate('github')">Contactar</v-btn>
      </div>
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
.subnav-wrapper {
    display: flex;
    justify-content: space-between; /* Esto permitirá que el botón y el menú se separen entre sí */
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 20px;
}

.subnav {
    display: flex;
    align-items: center;
    gap: 5px;
}

.subnav-button {
    background-color: transparent !important;
    color: inherit;
    margin: 0 2px;
}

.theme-toggle {
    margin-right: 10px; /* Separación entre el botón y el menú */
}


  </style>
  