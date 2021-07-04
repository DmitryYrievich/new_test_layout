import Vue from 'vue';
import VueRouter from 'vue-router'

import MainPage from "./components/MainPage.vue";
import ProductCard from "./components/ProductCard.vue";

Vue.use(VueRouter)

let routes = [{
    name: 'home',
    path: '/',
    component: MainPage,
  },
  {
    name: 'product',
    path: '/product/:id',
    component: ProductCard,
  }
];
export default new VueRouter({
  routes
});
