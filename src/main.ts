import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import ResizeComponent from "@/components/common/ResizeComponent.vue";
import ModalComponent from "@/components/common/ModalComponent.vue";

Vue.config.productionTip = false;
Vue.component("v-resize", ResizeComponent);
Vue.component("v-modal", ModalComponent);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
