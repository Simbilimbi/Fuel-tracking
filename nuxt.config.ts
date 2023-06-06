// https://nuxt.com/docs/api/configuration/nuxt-config
import * as dotenv from 'dotenv'

//import variable from the .env file to be available in production
dotenv.config();

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
   css: [
       
       
       'primevue/resources/themes/lara-light-blue/theme.css',
       'primevue/resources/primevue.css',
       'primeicons/primeicons.css',
       
       ],
   build: {
       transpile: [
           'primevue'
       ]
   },
   modules: [
      '@pinia/nuxt'
  ],
   
})


