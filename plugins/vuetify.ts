import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'dark',
            options: {
                customProperties: true
              },
            themes: {
                dark: {
                    colors: {
                        background: '#161616',  // Por ejemplo
                        surface: '#0f0f0f',
                        primary: '#212121',
                        secondary: '#424242',
                        accent: '#FF4081',
                        error: '#FF5252',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FFC107'
                        // ... puedes agregar otros colores si los necesitas
                    }
                },
                light: {
                    colors: {
                        background: '#FFFFFF',
                        surface: '#F1F1F1',
                        primary: '#1976D2',
                        // ... otros colores para el tema claro
                    }
                }
            }
        }
    })
    
    nuxtApp.vueApp.use(vuetify)
    
})
