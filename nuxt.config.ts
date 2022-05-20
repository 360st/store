import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available within server-side
        secret: process.env.SECRET,
        key: process.env.KEY,
        // Keys within public, will be also exposed to the client-side
        public: {
          baseURL: process.env.BASE,
        }
      },   
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    },
    buildModules: [
        ['@pinia/nuxt', { disableVuex: true }]
    ],
    css:[
        '@/assets/css/tailwind.css'
    ]
})

  