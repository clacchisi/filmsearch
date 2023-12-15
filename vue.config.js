const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   pwa: {
//     manifestOptions: {
//     name: 'My first PWA', 
//     icons: [
//       {
//         src: "./img/icons/android-chrome-512x512.png",
//         sizes: "512x512",
//         type: "image/png",
//         purpose: "any maskable",
//       },
//       {
//         src: "./img/icons/android-chrome-192x192.png",
//         sizes: "192x192",
//         type: "image/png",
//         purpose: "any maskable",
//       }, {
//         src: "./img/icons/android-chrome-maskable-512x512.png",
//         sizes: "512x512",
//         type: "image/png",
//         purpose: "any maskable",
//       },
//       {
//         src: "./img/icons/android-chrome-maskable-192x192.png",
//         sizes: "192x192",
//         type: "image/png",
//         purpose: "any maskable",
//       },
//     ],
//   }
//   }
// })

module.exports = {
  transpileDependencies: true,
  pwa: {
    manifestOptions: {
      name: "App Name",
      short_name: "Short Name",
      start_url: "./",
      display: "standalone",
      theme_color: "#000000",
      icons: [
        {
          src: "./favicon.svg",
          sizes: "512x512",
          type: "image/svg+xml",
          purpose: "any maskable",
        },
      ],
    },
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    iconPaths: {
      maskicon: null,
      favicon32: "./favicon32.png",
      favicon16: "./favicon16.png",
      appleTouchIcon: null,
      msTileImage: null,
    },
    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
  },
};

