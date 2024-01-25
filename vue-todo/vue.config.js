const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_HYDRATION__: true,
        __VUE_PROD_HYDRATION_DETAILS__: true,
      }),
    ],
  },
})
