<template>
  <div class="portfolio-container">
    <v-row>
      <v-col v-for="trabajo in trabajos" :key="trabajo.empresa" cols="12" md="4">
        <v-card class="elevation-12">
          <v-card-title>{{ trabajo.empresa }}</v-card-title>
          <v-card-subtitle>{{ trabajo.periodo }}</v-card-subtitle>
          <v-card-text>
            {{ trabajo.descripcion }}
            <div v-if="trabajo.showDetalle">
              {{ trabajo.detalle }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-chip v-for="tech in trabajo.tecnologias" :key="tech" small outlined>{{ tech }}</v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Experiencia',
  setup() {
    const trabajos = ref([
      {
        empresa: 'Empresa A',
        periodo: 'Enero 2019 - Diciembre 2020',
        descripcion: 'Aquí la descripción corta del trabajo en Empresa A...',
        detalle: 'Aquí el detalle completo del trabajo en Empresa A...',
        tecnologias: ['Vue', 'Nuxt', 'Vuetify'],
        showDetalle: false
      },
      {
        empresa: 'Empresa B',
        periodo: 'Enero 2021 - Diciembre 2022',
        descripcion: 'Aquí la descripción corta del trabajo en Empresa B...',
        detalle: 'Aquí el detalle completo del trabajo en Empresa B...',
        tecnologias: ['React', 'Next', 'Tailwind'],
        showDetalle: false
      },
      {
        empresa: 'Empresa C',
        periodo: 'Enero 2023 - Actualidad',
        descripcion: 'Aquí la descripción corta del trabajo en Empresa C...',
        detalle: 'Aquí el detalle completo del trabajo en Empresa C...',
        tecnologias: ['Angular', 'TypeScript', 'RxJS'],
        showDetalle: false
      }
    ]);

    return {
      trabajos
    };
  }
});
</script>

<style scoped>
.portfolio-container {
  padding: 20px;
}

.elevation-12 {
  transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 12px 17px -10px rgba(0, 0, 0, 0.2), 0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);
}

.v-card {
  border-radius: 10px;
  overflow: hidden;
}
</style>
