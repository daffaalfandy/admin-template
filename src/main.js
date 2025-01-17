import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.scss";
import "./bootstrap";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // eslint-disable-next-line prettier/prettier
  render: (h) => h(App),
}).$mount("#app");
