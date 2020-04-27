import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: () => import("@/pages/Home.vue"),
  },
  // {
  //   path: "/404",
  //   component: () => import("@/views/error404/index.vue"),
  // },
  // {
  //   path: "*",
  //   redirect: "/404",
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
