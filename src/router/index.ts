import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/main/index.vue"),
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
    path: "/signin",
    component: () => import("@/views/signIn/index.vue")
  },
  {
    path: "/404",
    component: () => import("@/views/error404/index.vue")
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
