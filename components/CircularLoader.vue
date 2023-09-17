<template>
    <v-dialog v-model="show" persistent max-width="290">
      <v-card>
        <v-card-text class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
          <span>Enviando...</span>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, PropType } from 'vue';
  
  export default defineComponent({
    name: 'CircularLoader',
    props: {
      show: {
        type: Boolean as PropType<boolean>,
        required: true,
      },
    },
  });
  </script>
  