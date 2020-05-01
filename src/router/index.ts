import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/components/layout/Layout.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: () => import("@/pages/Home.vue")
  },
  {
    path: "/404",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/pages/Error.vue")
      }
    ]
  },
  {
    path: "/mainDetail",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/pages/MainDetail.vue")
      }
    ]
  },
  {
  
    path: "/new",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/pages/newFile.vue")
      }
    ]
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
