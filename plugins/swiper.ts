import { defineNuxtPlugin } from '#app';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.component('Swiper', Swiper);
  nuxt.vueApp.component('SwiperSlide', SwiperSlide);
});
