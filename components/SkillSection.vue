<template>
    <v-row class="mb-6">
      <v-col cols="12">
        <h2>{{ title }}</h2>
        <v-divider></v-divider>
      </v-col>
      <v-col v-for="plate in plates" :key="plate.id" cols="3" class="my-2">
        <v-sheet elevation="2" class="square-plate d-flex align-center justify-center">
          <img :src="plate.image" :alt="plate.alt" class="plate-logo" />
        </v-sheet>
      </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  type Plate = {
    id: number;
    image: string;
    alt: string;
  };
  
  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true
      },
      plates: {
        type: Array as PropType<Plate[]>,
        default: () => []
      }
    }
  });
  </script>
  
  <style scoped>
  .square-plate {
    position: relative;
    width: 100%;
    padding-top: 100%; /* Esto asegura un aspecto cuadrado */
    background-color: #2727278f;
    overflow: hidden;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px; /* Si quieres bordes redondos */
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    }
  }

  .plate-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    max-height: 80%;
  }

  /* Ajustes responsive */
  @media (max-width: 1200px) {
    .v-col[cols="3"] {
      flex-basis: 25%;
    }
  }

  @media (max-width: 992px) {
    .v-col[cols="3"] {
      flex-basis: 33.33%;
    }
  }

  @media (max-width: 768px) {
    .v-col[cols="3"] {
      flex-basis: 50%;
    }
  }

  @media (max-width: 576px) {
    .v-col[cols="3"] {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
</style>