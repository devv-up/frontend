import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";
import { Main, Error404 } from "@/views";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Main,
        props: route => ({
          searchtext: route.query.searchtext,
          searchdate: route.query.searchdate,
          searchtime: route.query.searchtime,
          searchcategory: route.query.searchcategory,
          searchtag: route.query.searchtag
        })
      }
    ]
  },
  {
    path: "/404",
    component: Error404
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
