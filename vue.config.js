const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   pwa: {
//     name: 'TEST', 
//     short_name: "Short Name",
//     start_url: "./",
//     display: "full",
//     theme_color: "#000000",
//     icons: [
//       {
//         src: "./img/icons/android-chrome-512x512.png",
//         sizes: "512x512",
//         type: "png",
//         purpose: "any maskable",
//       },
//       {
//         src: "./img/icons/android-chrome-192x192.png",
//         sizes: "192x192",
//         type: "png",
//         purpose: "any maskable",
//       }, {
//         src: "./img/icons/android-chrome-maskable-512x512.png",
//         sizes: "512x512",
//         type: "png",
//         purpose: "any maskable",
//       },
//       {
//         src: "./img/icons/android-chrome-maskable-192x192.png",
//         sizes: "192x192",
//         type: "png",
//         purpose: "any maskable",
//       },
//     ],
//     themeColor: "#000000",
//     msTileColor: "#000000",
//     appleMobileWebAppCapable: "yes",
//     appleMobileWebAppStatusBarStyle: "black",
//     iconPaths: {
//       maskicon: null,
//       favicon32: "./favicon32.png",
//       favicon16: "./favicon16.png",
//       appleTouchIcon: null,
//       msTileImage: null,
//     },
//     // configure the workbox plugin
//     workboxPluginMode: "GenerateSW",
//   }
// })

// module.exports = defineConfig({
//   transpileDependencies: true,
//   pwa: {
//     // manifestOptions: {
//       name: "App Name",
//       short_name: "Short Name",
//       start_url: "./",
//       display: "standalone",
//       theme_color: "#000000",
//       icons: [
//         {
//          src: "./img/icons/android-chrome-192x192.png",
//           sizes: "192x192",
//           type: "png",
//           purpose: "any maskable",
//         },
//       ],
//     // },
//     themeColor: "#4DBA87",
//     msTileColor: "#000000",
//     appleMobileWebAppCapable: "yes",
//     appleMobileWebAppStatusBarStyle: "black",
//     iconPaths: {
//       maskicon: null,
//       favicon32: "./favicon32.png",
//       favicon16: "./favicon16.png",
//       appleTouchIcon: null,
//       msTileImage: null,
//     },
//     // configure the workbox plugin
//     workboxPluginMode: "GenerateSW",
//   },
// });

module.exports = defineConfig({

  // pwa: {
  //   name: 'My App',
  //   themeColor: '#4DBA87',
  //   msTileColor: '#000000',
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',
  //   iconPaths: {
  //     faviconSVG: 'img/icons/favicon.svg',
  //     favicon32: 'img/icons/favicon-32x32.png',
  //     favicon16: 'img/icons/favicon-16x16.png',
  //     appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
  //     maskIcon: 'img/icons/safari-pinned-tab.svg',
  //     msTileImage: 'img/icons/msapplication-icon-144x144.png'
  //   },
  
  //   // configure the workbox plugin
  //   workboxPluginMode: 'GenerateSW'
  // },
  pwa: {
    name: "MyApp",
    themeColor: "#000000",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    assetsVersion: "1.2",
    iconPaths: {
    favicon32: "img/icons2/favicon-32x32.png",
    favicon16: "img/icons2/favicon-16x16.png",
    appleTouchIcon: "img/icons2/apple-touch-icon-152x152.png",
    maskIcon: "img/icons2/safari-pinned-tab.svg",
    msTileImage: "img/icons2/msapplication-icon-144x144.png",
    },
    manifestOptions: {
    icons: [
    {
    src: "./img/icons2/android-chrome-192x192.png",
    sizes: "192x192",
    type: "image/png",
    },
    {
    src: "./img/icons2/android-chrome-512x512.png",
    sizes: "512x512",
    type: "image/png",
    },
    {
    src: "./img/icons2/android-chrome-maskable-192x192.png",
    sizes: "192x192",
    type: "image/png",
    },
    {
    src: "./img/icons2/android-chrome-maskable-512x512.png",
    sizes: "512x512",
    type: "image/png",
    },
    {
    src: "./img/icons2/apple-touch-icon-60x60.png",
    sizes: "60x60",
    type: "image/png",
    },
    {
    src: "./img/icons2/apple-touch-icon-76x76.png",
    sizes: "76x76",
    type: "image/png",
    },
    {
    src: "./img/icons2/apple-touch-icon-120x120.png",
    sizes: "120x120",
    type: "image/png",
    },
    {
    src: "./img/icons2/apple-touch-icon-152x152.png",
    sizes: "152x152",
    type: "image/png",
    },
    {
    src: "./img/icons2/apple-touch-icon-180x180.png",
    sizes: "180x180",
    type: "image/png",
    },
    {
    src: "./img/icons2/apple-touch-icon.png",
    sizes: "180x180",
    type: "image/png",
    },
    {
    src: "./img/icons2/msapplication-icon-144x144.png",
    sizes: "144x144",
    type: "image/png",
    },
    {
    src: "./img/icons2/mstile-150x150.png",
    sizes: "150x150",
    type: "image/png",
    },
    ],
    },
  }
})
