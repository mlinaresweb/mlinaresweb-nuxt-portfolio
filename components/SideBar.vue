<template>
    <div class="sidebar-container">
      <div class="avatar-margin">
        <img src="tu_url_de_imagen" alt="Nombre" class="avatar-img">
      </div>
      <div class="mt-4"></div>
      <h3>Tu Nombre</h3>
      <p>Tu Título</p>
      <div class="my-4 divider"></div>
      <ul class="sidebar-list">
        <li class="sidebar-item">
          <span class="mdi mdi-email"></span> tu_correo@email.com
        </li>
        <li class="sidebar-item" @click="goTo('https://github.com/tu_usuario')">
          <span class="mdi mdi-github"></span> Github
        </li>
        <li class="sidebar-item" @click="goTo('https://linkedin.com/in/tu_usuario')">
          <span class="mdi mdi-linkedin"></span> LinkedIn
        </li>
        <li class="sidebar-item">
          <span class="mdi mdi-map-marker"></span> Tu Localización
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goTo(url) {
        window.location.href = url;
      }
    }
  }
  </script>
  
  <style scoped>
.sidebar-container {
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 250px;
  height: calc(100vh - 30px);
  overflow-y: auto;
  margin: 15px; 
  background-color: var(--v-primary-base);
}
  
  .avatar-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  
  .divider {
    height: 1px;
    background-color: #ddd;
  }
  
  .sidebar-list {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .sidebar-item span {
    margin-right: 10px;
  }
  </style>
  