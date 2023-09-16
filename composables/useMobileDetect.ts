import { ref, onMounted, onUnmounted } from 'vue';

export function useMobileDetect() {
    const isMobile = ref(false);

    const updateMobileState = () => {
      if (typeof window !== 'undefined') {
        isMobile.value = window.innerWidth <= 768;
      }
    };

    onMounted(() => {
      updateMobileState();
      window.addEventListener('resize', updateMobileState);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateMobileState);
    });

    return {
      isMobile
    };
}
