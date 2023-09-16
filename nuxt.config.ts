export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '@/assets/styles.css','@/assets/tailwind.css',],
  plugins: [
    '~/plugins/vuetify.ts' // Asegúrate de que la ruta sea correcta
  ],
  build: {
    transpile: ['vuetify']
  }
})
