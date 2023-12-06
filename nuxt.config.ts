export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
});