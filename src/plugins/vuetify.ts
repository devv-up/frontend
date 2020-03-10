import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    themes: {
      light: {
        primary: "#039BE5",
        secondary: "#424242",
        accent: "#80D8FF",
        error: "#FF5252",
        info: "#03A9F4",
        success: "#4CAF50",
        warning: "#FFC107",
      }
    }
  }
});
