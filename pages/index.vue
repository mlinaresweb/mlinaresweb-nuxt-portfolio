<template>
  <v-container fluid>
    <!-- Título -->
    <v-row justify="center" class="mb-4">
      <v-col cols="12">
        <h1 class="display-2 text-left font-weight-light">About</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <!-- Descripción e imagen -->
    <v-row class="equal-height-row">
      <v-col :cols="isMobile ? 12 : 6" class="text-justify py-5 equal-height-col">
        <!-- Contenido: Texto y Plates -->
        <div class="content-wrapper">
          <!-- Texto -->
          <div class="text-wrapper">
            <h3 class="mb-2">Hola, soy Manel Linares.</h3>
            <p class="subtitle-1">
              Soy un desarrollador full stack con una inclinación especial hacia el front end. Vue.js es mi herramienta de elección, y a través de ella, 
              he creado interfaces de usuario que combinan funcionalidad con diseño estético. Pero más allá de la programación y el diseño, lo que realmente 
              me apasiona es entender y atender las necesidades del usuario. Creo que un buen desarrollo no solo se refleja en el código que escribo, sino 
              también en cómo ese código mejora y simplifica la experiencia del usuario.

            </p>
            <p class="subtitle-1">
              A lo largo de mi carrera, he aprendido la importancia del trabajo en equipo, del aprendizaje continuo y de la adaptabilidad. Cada proyecto es 
              una nueva oportunidad para crecer, para innovar y para entregar soluciones que marquen la diferencia.
            </p>
            
          </div>
          <span class="mt-6">Mis tecnologias favoritas </span>
       <!-- Plates -->
       <v-row class="mt-2 ">
        
            <v-col cols="3" class="my-2 ">
              <v-sheet elevation="2" class="square-plate d-flex align-center justify-center ">
                <img src="/vue.png" alt="Imagen 1" class="plate-logo "/>
              </v-sheet>
            </v-col>
            <v-col cols="3" class="my-2">
              <v-sheet elevation="2" class="square-plate d-flex align-center justify-center">
                <img src="/javascript.png" alt="Imagen 2" class="plate-logo"/>
              </v-sheet>
            </v-col>
            <v-col cols="3" class="my-2">
              <v-sheet elevation="2" class="square-plate d-flex align-center justify-center">
                <img src="/typescript.png" alt="Imagen 3" class="plate-logo"/>
              </v-sheet>
            </v-col>
            <v-col cols="3" class="my-2">
              <v-sheet elevation="2" class="square-plate d-flex align-center justify-center">
                <img src="/node.png" alt="Imagen 4" class="plate-logo"/>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col :cols="isMobile ? 12 : 6" class="py-5 equal-height-col">
        <!-- Imagen -->
<v-img src="/manel-about.png" aspect-ratio="2" contain class="about-image"></v-img>
      </v-col>
    </v-row>
  </v-container>
  <SkillsPlates></SkillsPlates>
</template>


<script>
import { useMobileDetect } from '@/composables/useMobileDetect';

export default {
  name: 'AboutPage',
  setup() {
    const { isMobile } = useMobileDetect();

    return { isMobile };
  }
}
</script>
<style scoped>
h1 {
  color: #424242;
}

.equal-height-row {
  display: flex;
  align-items: center; 
}

.equal-height-row {
  height: 100%;  
  display: flex;
  align-items: stretch; 
}


.content-wrapper {
  flex: 1;
  display: flex;    
  flex-direction: column; 
}
.content-wrapper, .about-image {
  justify-content: center; 
}


.about-image {
  flex: 1;
  display: flex;
  align-items: center; 
  height: 100%;
  border-radius: 8px; 
}

@media (max-width: 767px) {
  .about-image {
    display: none;
  }
}

@media (min-width: 1650px) {
.subtitle-1{
  font-size: 1.4rem;
}
h3{
  font-size: 2rem;
}
.about-image {
margin-left: 70px;

}
}
@media (min-width: 1000px) and (max-width: 1150px) {
  .subtitle-1{
  font-size: 0.8rem;
}
}
@media (min-width: 900px) and (max-width: 1000px) {
  .subtitle-1{
  font-size: 0.7rem;
}
}
.square-plate {
  position: relative;
  padding-bottom: 100%;
  background-color: #242424;
  border-radius: 8px;         
  transition: box-shadow 0.3s; 
  box-shadow: 
      0 0 0 2px #e0e0e0, 
      0 2px 4px rgba(0, 0, 0, 0.1); 
      
}

.square-plate:hover {
  box-shadow: 
      0 0 0 2px #ff9800,  
      0 2px 4px rgba(0, 0, 0, 0.1); 
}


.plate-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 70%;  
  max-height: 70%; 
  width: auto;     
  height: auto;
}

</style>
