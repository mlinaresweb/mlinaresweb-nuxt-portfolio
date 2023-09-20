<template>
  <div class="sidebar-container" :class="{ expanded: state.showDetails }">

    <!-- Toggles en la parte superior -->
    <div class="toggle-container">
      <ToogleTheme></ToogleTheme>
      <ToogleTheme></ToogleTheme>
    </div>

    <!-- Contenido principal centrado -->
    <div class="content-container">
      <div class="avatar-margin">
        <img src="../assets/manel-perfil.png" alt="Nombre" class="avatar-img">
      </div>
      <h3>Tu Nombre</h3>
      <p>Tu Título</p>

      <!-- Ícono para desplegar el contenido en móvil -->
      <div v-if="isMobile" class="expand-icon" @click="toggleSidebar">
        <span class="mdi mdi-arrow-down"></span>
      </div>

      <!-- Contenido que se desplegará en móvil -->
      <div v-if="!isMobile || state.showDetails">
        <div class="my-4 divider"></div>
        <ul class="sidebar-list">
          <li class="sidebar-item">
            <span class="mdi mdi-email"></span> tu_correo@email.com
          </li>
          <li class="sidebar-item">
            <span class="mdi mdi-github"></span> Github
          </li>
          <li class="sidebar-item">
            <span class="mdi mdi-linkedin"></span> LinkedIn
          </li>
          <li class="sidebar-item">
            <span class="mdi mdi-map-marker"></span> Tu Localización
          </li>
        </ul>
      </div>
    </div>

    <!-- Pie de página en la parte inferior -->
    <footer v-if="!isMobile || state.showDetails" class="footer">
  <p>2023 • Hecho por mí</p>
</footer>
  </div>
</template>

  
  <script lang="ts">
  import { reactive } from 'vue';
  import { useMobileDetect } from '@/composables/useMobileDetect';
  
  export default {
    setup() {
      const { isMobile } = useMobileDetect();
  
      const state = reactive({
        showDetails: false
      });
  
      const toggleSidebar = () => {
        state.showDetails = !state.showDetails;
      };
  
      return {
        isMobile,
        state,
        toggleSidebar,
      };
    }
  }
  </script>
  

  
<style scoped>
.sidebar-container {
  position: relative;
  padding: 15px;
  width: 250px;
  height: calc(100vh - 40px);
  overflow-y: auto;
  margin: 20px; 
  margin-right: -12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.footer {
  text-align: center;  /* Centrar el texto del pie de página */
}
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;  /* Centrar contenido horizontalmente */
  flex: 1;  /* Ocupar todo el espacio disponible */
}
.toggle-container {
  display: flex;
  justify-content: space-between;
}
.avatar-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.expand-icon {
  cursor: pointer;
  margin-top: 10px;
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

/* Estilos para móvil */
@media (max-width: 970px) {
  .sidebar-container {
    width: auto;
    height: auto; /* altura automática en móviles */
    margin-right: 20px;
    margin: 6px;
    margin-bottom: -1px;
  }

 
  .expand-icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 10;
  }

  /* Estilo cuando se muestra el detalle en móviles */
  .sidebar-container.expanded {
    max-height: calc(100vh - 30px); /* altura máxima expandida */
  }
  
}
</style>
