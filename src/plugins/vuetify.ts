import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 500,
      sm: 900,
      md: 1200,
      lg: 1904
    }
  },
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#8D13D0",
        secondary: "#000000",
        accent: "#E040FB",
        error: "#FF5252",
        info: "#03A9F4",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      dark: {
        primary: "#8D13D0"
      }
    }
  }
});
