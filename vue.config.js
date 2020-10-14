const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'
const scssUtils = '~@/styles/utils/index'

module.exports = {
  css: {
    extract: isProd,
    // https://github.com/vuejs/vue/issues/9194#issuecomment-473873303
    sourceMap: isProd,
    loaderOptions: {
      sass: {
        // Inject utils
        prependData: `
          $env: '${NODE_ENV}';
          @import '${scssUtils}';
        `,
      },
    },
  },
}
