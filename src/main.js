import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NavBar from "../src/components/NavBar";
import "nprogress/nprogress.css";
export const bus = new Vue();

Vue.config.productionTip = false;

Vue.component("NavBar", NavBar);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
