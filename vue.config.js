let jenkins = {}
try {
  jenkins = require('./_jenkins.json')
} finally {}

module.exports = {
  transpileDependencies: ["vuetify", "vuex-module-decorators"],
  publicPath: jenkins.publicPath || ''
};