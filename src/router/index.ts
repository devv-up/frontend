import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import LayoutComponent from "@/components/layout/LayoutComponent.vue";
import HomeView from "@/pages/HomeView.vue";
import ErrorView from "@/pages/ErrorView.vue";
import MainDetail from "@/pages/MainDetail.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: HomeView
  },
  {
    path: "/404",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: ErrorView
      }
    ]
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: MainDetail
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
