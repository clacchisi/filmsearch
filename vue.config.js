const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'My first PWA', 
  //   icons: [
  //   {"src":"./assets/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},
  //   {"src":"./assets/android-chrome-512x512.png","sizes":"512x512","type":"image/png"},
  //   {"src":"./assets/android-chrome-maskable-192x192.png","sizes":"192x192","type":"image/png","purpose":"maskable"},
  //   {"src":"./assets/android-chrome-maskable-512x512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}
  // ]
  icons: [
    {
      src: "./assets/android-chrome-512x512.png",
      sizes: "512x512",
      type: "png",
      purpose: "any maskable",
    },
    {
      src: "./assets/android-chrome-192x192.png",
      sizes: "192x192",
      type: "png",
      purpose: "any maskable",
    },
  ],
  }
})

