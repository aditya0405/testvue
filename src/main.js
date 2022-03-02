import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import ListUser from "./components/ListUser.vue";
import ListPhoto from "./components/ListPhoto.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/listuser",
    component: ListUser,
  },
  {
    path: "/listpoto",
    component: ListPhoto,
  },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
