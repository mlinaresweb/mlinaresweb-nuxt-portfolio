import { ref } from 'vue'

const darkMode = ref(true)

export function useTheme() {
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
  }

  return {
    darkMode,
    toggleDarkMode
  }
}