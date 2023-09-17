<template>
    <v-container fluid class="mt-5">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-form ref="formRef" v-model="valid" lazy-validation>
            <v-text-field v-model="form.name" :rules="nameRules" label="Nombre" required />
            <v-text-field v-model="form.email" :rules="emailRules" label="Email" required />
            <v-select 
    :value="form.reason"
    @input="(value: string) => { form.reason = value }"
    :items="reasons" 
    label="Motivo" 
    required />

            <v-textarea v-model="form.message" :rules="messageRules" label="Mensaje" required />
            <v-btn @click="submitForm">Enviar</v-btn>
            <Alerts 
    :show="notification.show"
    :type="notification.type"
    :message="notificationMessage"
  />
          </v-form>
        </v-col>
      </v-row>
      <CircularLoader :show="loading" />
  </v-container>
</template>
  
  <script lang="ts">
  import { Ref, ref } from 'vue';

  import emailjs from 'emailjs-com';

  export default {
    name: 'ContactPage',
    setup() {
        const form = ref({
  name: '',
  email: '',
  reason: '',  
  message: ''
});
const notification = ref<{ show: boolean, type: 'success' | 'error', message?: string }>({
  show: false,
  type: 'success',
  message: '' 
});
    const notificationMessage = ref('');
      const nameRules = [(v: string) => !!v || 'El nombre es requerido'];
      const emailRules = [
        (v: string) => !!v || 'El email es requerido',
        (v: string) => /.+@.+/.test(v) || 'Debe ser un email válido'
      ];
      const messageRules = [(v: string) => !!v || 'El mensaje es requerido'];
      const reasons = ['Consulta', 'Sugerencia', 'Oferta de trabajo', 'Otros'];
  
      const valid = ref(false);
      const loading = ref(false);

      const formRef = ref(null);

      const resetForm = () => {
  form.value.name = '';
  form.value.email = '';
  form.value.reason = '';
  form.value.message = '';

  if ((formRef.value as any).reset) {
    (formRef.value as any).reset();
  }
};


const submitForm = () => {
      if (valid.value) {
        loading.value = true;
        emailjs.send('service_d69qik6', 'template_n2tignf', form.value, '9KxcpJ-uaUjg8Cltr')
          .then((response) => {
            console.log('Email successfully sent!', response);
            resetForm();
            loading.value = false;

            // Establece el estado y el mensaje de la notificación para éxito
            notification.value = { show: true, type: 'success' };
            notificationMessage.value = 'Correo enviado con éxito!';
          })
          .catch((error) => {
            console.error('Email send failed...', error);
            loading.value = false;

            // Establece el estado y el mensaje de la notificación para error
            notification.value = { show: true, type: 'error' };
            notificationMessage.value = 'Hubo un error al enviar el correo.';
          });
      }
    };

      return {
        form,
        nameRules,
        emailRules,
        messageRules,
        reasons,
        valid,
        submitForm,
        formRef,
        loading,
        notification,
      notificationMessage
      };
    }
  };
  </script>
  