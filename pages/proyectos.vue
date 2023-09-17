<template>
  <div class="projects-page">
    <Swiper
  ref="swiperRef"
  :modules="[SwiperPagination, SwiperAutoplay]"  
  :slides-per-view="slidesPerView"
  :space-between="20"
  :loop="true"
  :pagination="{ clickable: true, type: 'progressbar' }"
  :autoplay="{ delay: 5000, disableOnInteraction: false }" 
  class="mySwiper"
>

      <SwiperSlide v-for="project in projects" :key="project.id">
        <v-card flat class="project-card">
          <v-img :src="project.image" class="project-image" contain aspect-ratio="16/9">
            <div class="overlay">
              <v-card-title class="title">{{ project.title }}</v-card-title>
            </div>
          </v-img>
        </v-card>
      </SwiperSlide>
    </Swiper>

    <GithubProjects></GithubProjects>
  </div>
</template>

  
  <script lang="ts">
  import { defineComponent, computed, ref, onMounted, Ref } from 'vue';
  import { Swiper, SwiperSlide, } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import { useMobileDetect } from '~/composables/useMobileDetect';
  import useSlider, { Project } from '~/composables/useSlider';

  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const initialProjects = [
      { id: 1, title: "Proyecto A", description: "Descripción A", image: "/waves2.png", technologies: ["Vue", "Nuxt"] },
      { id: 2, title: "Proyecto B", description: "Descripción B", image: "/waves2.png", technologies: ["Vue", "Firebase"] },
      { id: 3, title: "Proyecto C", description: "Descripción C", image: "/waves2.png", technologies: ["Vue", "Vuetify"] },
      { id: 4, title: "Proyecto D", description: "Descripción D", image: "/waves2.png", technologies: ["Vue", "Node.js"] },
      { id: 5, title: "Proyecto E", description: "Descripción E", image: "/waves2.png", technologies: ["Vue", "Express"] },
      { id: 6, title: "Proyecto F", description: "Descripción A", image: "/waves2.png", technologies: ["Vue", "Nuxt"] },
      ];
  
      const { isMobile } = useMobileDetect();
        const slidesPerView = computed(() => (isMobile.value ? 1 : 3));
        
        const { projects } = useSlider(initialProjects, isMobile);

        return {
            slidesPerView,
            projects
        };
    }
});
  </script>

<style>
.project-card {
  background-color: #f5f5f5;
  padding: 0; 
  overflow: hidden; 
}
.projects-page {
  margin-bottom: 20px; 
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.034);
  backdrop-filter: blur(4px);
  padding: 5px;
}

.title {
  color: white !important;
  font-size: 1em;
}

.technologies {
  color: white;
}
.project-image {
  width: 100%; 
  height: 100%; 
  object-fit: cover;
}
.technologies .v-chip {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Estilos para la paginación de Swiper */
.swiper-pagination {
  position: relative;
 --swiper-pagination-color: #494949; /* Color del progreso activo */
  width: 80%;  
  left: 10%;  
  height: 4px;  
  background: rgba(255, 255, 255, 0.3); 
  border-radius: 2px; 
  z-index: 10;
}

.swiper-pagination-progressbar {
  background: rgb(196, 195, 195); 
  border-radius: 2px; 
  
}


</style>


