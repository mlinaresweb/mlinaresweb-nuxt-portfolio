<template>
    <div class="projects-page">
        <v-carousel v-if="projectGroups.length" cycle :model-value="currentIndex" @update:model-value="setIndex">
        <v-carousel-item v-for="projectGroup in projectGroups" :key="projectGroup[0].id">
          <v-row>
            <v-col v-for="project in projectGroup" :key="project.id" :cols="cols">
              <v-card flat class="project-card">
                <v-img :src="project.image" class="project-image" contain aspect-ratio="16/9">
                  <div class="overlay">
                    <v-card-title class="title">{{ project.title }}</v-card-title>
                  </div>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
  </template>
  

  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import useSlider from '~/composables/useSlider';
  import { useMobileDetect } from '~/composables/useMobileDetect';
  
  export default defineComponent({
    setup() {
      const initialProjects = [
      { id: 1, title: "Proyecto A", description: "Descripción A", image: "/waves2.png", technologies: ["Vue", "Nuxt"] },
        { id: 2, title: "Proyecto B", description: "Descripción B", image: "/waves2.png", technologies: ["Vue", "Firebase"] },
        { id: 3, title: "Proyecto C", description: "Descripción C", image: "/waves2.png", technologies: ["Vue", "Vuetify"] },
        { id: 4, title: "Proyecto D", description: "Descripción D", image: "/waves2.png", technologies: ["Vue", "Node.js"] },
        { id: 5, title: "Proyecto E", description: "Descripción E", image: "/waves2.png", technologies: ["Vue", "Express"] },
      ]; 
  
      const { isMobile } = useMobileDetect();
      const { currentIndex, projectGroups } = useSlider(initialProjects, isMobile);
      const cols = computed(() => isMobile.value ? 12 : 4);
  
      const setIndex = (index: number) => {
        currentIndex.value = index;
      }
  
      return {
        currentIndex,
        setIndex,
        cols,
        projectGroups
      };
    },
  });
  
  </script>
  

<style scoped>
.project-card {
  background-color: #f5f5f5;
  padding: 0; /* Eliminamos el padding del card */
  overflow: hidden; /* Esto evitará que la imagen se desborde del contenedor */
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
</style>


