import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import Resize from "@/components/common/Resize.vue";
import Modal from "@/components/common/Modal.vue";
import "@/utils/class-component-hooks";

Vue.config.productionTip = false;
Vue.component("v-resize", Resize);
Vue.component("v-modal", Modal);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
