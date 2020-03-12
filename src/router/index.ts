import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";
import { Main } from "@/views";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Main,
        props: (route) => ({
          searchtext: route.query.searchtext
        })
      }
    ]  
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
