let jenkins = {};
/* eslint-disable */
const fs = require("fs");
if (fs.existsSync("./_jenkins.json")) {
  jenkins = JSON.parse(fs.readFileSync("./_jenkins.json"));
}

module.exports = {
  transpileDependencies: ["vuetify", "vuex-module-decorators"],
  publicPath: jenkins.publicPath || ""
};
