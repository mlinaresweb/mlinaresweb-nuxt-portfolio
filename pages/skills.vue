<template>
    <v-container fluid>
      
      <!-- Front End -->
      <SkillSection title="Front End" :plates="frontEndSkills">
        <!-- Aquí van tus plates para Front End -->
      </SkillSection>
  
      <!-- Back End -->
      <SkillSection title="Back End" :plates="BackEndSkills">
        <!-- Aquí van tus plates para Back End -->
      </SkillSection>
  
      <!-- Bases de Datos -->
      <SkillSection title="Bases de datos" :plates="DataBaseSkills">
        <!-- Aquí van tus plates para Bases de datos -->
      </SkillSection>

          <!-- Librerías de UI -->
      <SkillSection title="Librerias de UI" :plates="UiSkills">
        <!-- Aquí van tus plates para Librerias de UI -->
      </SkillSection>
  
  
      <!-- Diseño UX UI -->
      <SkillSection title="Diseño UX UI" :plates="UxUiSkills">
        <!-- Aquí van tus plates para Diseño UX UI -->
      </SkillSection>
  
      <!-- Otros -->
      <SkillSection title="Otros" :plates="OtherSkills">
        <!-- Aquí van tus plates para Otros -->
      </SkillSection>
  
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import SkillSection from '~/components/SkillSection.vue';
  
  export default defineComponent({
    components: {
      SkillSection
    },
    data() {
  return {
    frontEndSkills: [
      { id: 1, image: '/html.png', alt: 'Vue.js' },
      { id: 2, image: '/css.png', alt: 'Vue.js' },
      { id: 3, image: '/javascript.png', alt: 'Vue.js' },
      { id: 4, image: '/typescript.png', alt: 'Vue.js' },
      { id: 5, image: '/vue.png', alt: 'Vue.js' },
      { id: 6, image: '/nuxt.png', alt: 'Vue.js' },
      { id: 7, image: '/angular.png', alt: 'Vue.js' },
      { id: 8, image: '/jquery.png', alt: 'Vue.js' },
    ],
    BackEndSkills: [
      { id: 1, image: '/node.png', alt: 'Vue.js' },
      { id: 2, image: '/php.png', alt: 'Vue.js' },
      { id: 3, image: '/laravel.png', alt: 'Vue.js' },
      { id: 4, image: '/c++.png', alt: 'Vue.js' },
    ],
    DataBaseSkills: [
      { id: 1, image: '/postgresql.png', alt: 'Vue.js' },
      { id: 2, image: '/mysql.png', alt: 'Vue.js' },
      { id: 3, image: '/mongodb.png', alt: 'Vue.js' },
      { id: 4, image: '/firebase.png', alt: 'Vue.js' },
    ],
    UiSkills: [
      { id: 1, image: '/tailwind.png', alt: 'Vue.js' },
      { id: 2, image: '/vuetify.png', alt: 'Vue.js' },
      { id: 3, image: '/bootstrap.png', alt: 'Vue.js' },
      { id: 4, image: '/sass.png', alt: 'Vue.js' },
    ],
    UxUiSkills: [
      { id: 1, image: '/figma.png', alt: 'Vue.js' },
      { id: 2, image: '/photoshop.png', alt: 'Vue.js' },
      { id: 3, image: '/indesign.png', alt: 'Vue.js' },
      { id: 4, image: '/behance.png', alt: 'Vue.js' },
    ],
    OtherSkills: [
      { id: 1, image: '/github.png', alt: 'Vue.js' },
      { id: 2, image: '/git.png', alt: 'Vue.js' },
      { id: 3, image: '/aws.png', alt: 'Vue.js' },
      { id: 4, image: '/virtualbox.png', alt: 'Vue.js' },
    ]
  };
}
  });
  </script>
  
  <style scoped>
  /* Aquí tus estilos si los necesitas */
  </style>
  