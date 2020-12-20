import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Dash from "../Dash";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // eslint-disable-next-line prettier/prettier
    component: Dash,
    // eslint-disable-next-line prettier/prettier
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // eslint-disable-next-line prettier/prettier
  routes,
});

export default router;
