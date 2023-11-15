// https://nuxt.com/docs/api/configuration/nuxt-config
import { Nitro } from 'nitropack'

export default defineNuxtConfig({
    devtools: { enabled: true },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    app: {
        head: {
            title: 'TestMaker',
        },
    },

    css: ['~/assets/css/main.css'],

    modules: ['@pinia/nuxt'],

    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
        },
    },

    hooks: {
        'nitro:build:before': (nitro: Nitro) => {
            nitro.options.moduleSideEffects.push('reflect-metadata')
        },
    },

    build: {
        transpile: ['primevue'],
    },
})
