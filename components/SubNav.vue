<template>
  <div class="subnav-wrapper container-border">
    <button v-if="showHamburgerMenu" @click="toggleSubNav" class="hamburger-menu">☰</button>

    <div v-if="showSubNav && showHamburgerMenu" class="mobile-subnav">
      <v-btn class="subnav-button" @click="navigate('index')">About</v-btn>
      <v-btn class="subnav-button" @click="navigate('skills')">Habilidades</v-btn>
      <v-btn class="subnav-button" @click="navigate('experencia')">Experencia</v-btn>
      <v-btn class="subnav-button" @click="navigate('proyectos')">Proyectos</v-btn>
      <v-btn class="subnav-button" @click="navigate('contact')">Contactar</v-btn>
    </div>

    <div class="subnav" v-if="!showHamburgerMenu">
      <v-btn class="subnav-button" @click="navigate('index')">About</v-btn>
      <v-btn class="subnav-button" @click="navigate('skills')">Habilidades</v-btn>
      <v-btn class="subnav-button" @click="navigate('experencia')">Experencia</v-btn>
      <v-btn class="subnav-button" @click="navigate('proyectos')">Proyectos</v-btn>
      <v-btn class="subnav-button" @click="navigate('contact')">Contactar</v-btn>
    </div>
  </div>
</template>


<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const showSubNav = ref(false);
    const showHamburgerMenu = ref(false);
    const router = useRouter();

    const toggleSubNav = () => {
      showSubNav.value = !showSubNav.value;
    };

    const navigate = (route: string) => {
      router.push({ name: route });
    };

    const updateHamburgerMenuVisibility = () => {
      showHamburgerMenu.value = window.innerWidth <= 400;
    };

    onMounted(() => {
      updateHamburgerMenuVisibility();
      window.addEventListener('resize', updateHamburgerMenuVisibility);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateHamburgerMenuVisibility);
    });

    return {
      showSubNav,
      showHamburgerMenu,
      toggleSubNav,
      navigate
    };
  }
};
</script>


  
  <style scoped>
.subnav-wrapper {
    position: relative; /* Permite a los hijos con posición absoluta posicionarse en relación con este contenedor */
    display: flex;
    justify-content: center; 
    padding: 5px;
    border-radius: 20px;
    width: 70%; 
}
.subnav {
    display: flex;
    align-items: center;
    gap: 5px;
    width: auto; 
}


.subnav-button {
    background-color: transparent !important;
    color: inherit;
    margin: 0 2px;
}
@media (max-width: 970px) {
  .subnav-wrapper {
    width: 100%; 
}
.subnav-button {
   font-size: 10px;
}
}
@media (max-width: 768px) {
.subnav-button {
   font-size: 6px;
   margin: 0;
}
.subnav {
  gap: 1px;

}
.subnav-wrapper {
    padding:2px;
}
}
@media (min-width: 971px) and (max-width: 1250px) {
  .subnav-button {
   font-size: 9px;
   margin: 0;
}
}

/* Estilos para el menú hamburguesa */
.hamburger-menu {
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.mobile-subnav {
    flex-direction: column;
   display: flex;
    gap: 5px;
}
/* Ocultar el menú hamburguesa por defecto y mostrarlo solo entre 0px y 400px */
.hamburger-menu {
  display: none;
}

@media (max-width: 400px) {
  .subnav-wrapper {
    flex-direction: column; /* Cambio para alinear el botón encima del menú */
    align-items: flex-end; /* Alinea el botón a la derecha */
  }
  
  .hamburger-menu {
    display: block;
    margin-right: 10px; /* Espacio entre el botón y el menú */
  }
  
  .subnav {
    display: none; /* Ocultar por defecto */
  }
  .subnav-button {
    margin-left: 20px;
    font-size: 8px;
}
}
  </style>
  