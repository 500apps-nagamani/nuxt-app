// https://nuxt.com/docs/api/configuration/nuxt-config

import {resolve} from "path"

export default defineNuxtConfig({

    
    modules : ['@nuxtjs/tailwindcss','@nuxt/content'],
  
    alias : {
        '@' : resolve(__dirname,"/")
    },

    css : ['~/assets/tailwind.css'],

    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      }
      
      

})
