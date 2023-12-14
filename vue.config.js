const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'My first PWA', 
    icons: [
    {"src":"./src/assets/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},
    {"src":"./src/assets/android-chrome-512x512.png","sizes":"512x512","type":"image/png"},
    {"src":"./src/assets/android-chrome-maskable-192x192.png","sizes":"192x192","type":"image/png","purpose":"maskable"},
    {"src":"./src/assets/android-chrome-maskable-512x512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}]
  }
})
