/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // Primevue
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
        // Tailwind
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './assets/css/main.css',
        './app.vue',
        './error.vue',
    ],

    darkMode: 'false',
    theme: {
        extend: {
            colors: {
                primary: '#009AB9',
                secondary: '#046f85',
            },
        },
    },
    plugins: [],
}
