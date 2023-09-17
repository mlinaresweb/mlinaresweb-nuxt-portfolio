export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '@/assets/styles.css','@/assets/tailwind.css',],
  modules: ['nuxt-swiper'],
  plugins: [
    '~/plugins/vuetify.ts', // Asegúrate de que la ruta sea correcta
    '~/plugins/swiper.ts',
    '~/plugins/axios.ts',
  ],
  swiper: {
    modules: ['pagination','autoplay'], // Asegúrate de que 'pagination' esté incluido
  },
  build: {
    transpile: ['vuetify']
  }
})
