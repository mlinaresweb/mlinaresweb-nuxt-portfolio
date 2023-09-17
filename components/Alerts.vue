<template>
    <div v-if="show && message">
    <v-alert :value="show" :type="type" dense outlined>
      {{ message }}
    </v-alert>
</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'Notification',
    props: {
      show: {
        type: Boolean as PropType<boolean>,
        required: true,
      },
      type: {
        type: String as PropType<'success' | 'error'>,
        required: true,
      },
      message: {
        type: String as PropType<string>,
        default: '',
      },
    },
  });
  </script>
  