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
            <p class="subtitle-1">
              it amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
              Donec nec erat vel libero ultrices auctor. Nulla facilisi. Mauris condimentum, odio sed feugiat mattis,
              nulla purus laoreet tellus, id tincidunt metus mauris sed ligula. Morbi sed dolor sit amet eros dapibus tincidunt.
              Sed varius, est et tincidunt condimentum, nunc nisl pellentesque leo, at elementum orci turpis non quam.
            </p>
            <p class="subtitle-1">
              it amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
              Donec nec erat vel libero ultrices auctor. Nulla facilisi. Mauris condimentum, odio sed feugiat mattis,
              nulla purus laoreet tellus, id tincidunt metus mauris sed ligula. Morbi sed dolor sit amet eros dapibus tincidunt.
              Sed varius, est et tincidunt condimentum, nunc nisl pellentesque leo, at elementum orci turpis non quam.
            </p>
          </div>

       <!-- Plates -->
       <v-row class="mt-4 ">
            <v-col cols="3" class="my-2 ">
              <v-sheet elevation="2" class="square-plate d-flex align-center justify-center ">
                <img src="/montaña.png" alt="Imagen 1" class="plate-logo "/>
              </v-sheet>
            </v-col>
            <v-col cols="3" class="my-2">
              <v-sheet elevation="2" class="square-plate d-flex align-center justify-center">
                <img src="/perro.png" alt="Imagen 2" class="plate-logo"/>
              </v-sheet>
            </v-col>
            <v-col cols="3" class="my-2">
              <v-sheet elevation="2" class="square-plate d-flex align-center justify-center">
                <img src="/musica.png" alt="Imagen 3" class="plate-logo"/>
              </v-sheet>
            </v-col>
            <v-col cols="3" class="my-2">
              <v-sheet elevation="2" class="square-plate d-flex align-center justify-center">
                <img src="/gym.png" alt="Imagen 4" class="plate-logo"/>
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

}

@media (max-width: 767px) {
  .about-image {
    display: none;
  }
}

.square-plate {
  position: relative;
  padding-bottom: 100%;
  background-color: #242424;
  border-radius: 8px;         /* Esquinas ligeramente redondeadas */
  transition: box-shadow 0.3s; /* Efecto suave al cambiar la sombra */
  box-shadow: 
      0 0 0 2px #e0e0e0, /* Borde claro */
      0 2px 4px rgba(0, 0, 0, 0.1); /* Sombreado sutil */
      
}

.square-plate:hover {
  box-shadow: 
      0 0 0 2px #ff9800,  /* Cambiar el color del "borde" al pasar el mouse por encima */
      0 2px 4px rgba(0, 0, 0, 0.1); /* Sombreado sutil */
}


.plate-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 70%;  /* limita el ancho máximo */
  max-height: 70%; /* limita la altura máxima */
  width: auto;     /* permita que las imágenes se ajusten según su aspecto */
  height: auto;
}

</style>
