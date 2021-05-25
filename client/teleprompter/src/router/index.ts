import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../components/HomePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
