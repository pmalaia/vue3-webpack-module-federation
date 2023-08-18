import { createApp } from 'vue';
import { createStore } from 'vuex';
import * as VueRouter from 'vue-router';
import Home from './views/Home.vue';
import About from 'remote/About';
import App from './App.vue';

import './index.scss';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const store = createStore({
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    addOne(state) {
      state.count++;
    },
  },
});

createApp(App).use(router).use(store).mount('#app');
