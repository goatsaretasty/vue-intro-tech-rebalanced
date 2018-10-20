// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import Vuetify from "vuetify";
import VueRouter from "vue-router";
import "vuetify/dist/vuetify.min.css";

import TodoList from "./views/TodoList";
import About from "./views/About";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: TodoList },
  { path: "/about", component: About },
];

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
