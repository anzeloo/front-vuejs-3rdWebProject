import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Users from "./components/Users";
import EditUsers from "./components/EditUsers";

const routes = [
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/users/:id",
    component: EditUsers,
  },
];

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
