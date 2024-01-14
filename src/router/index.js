import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Pages/Login.vue';
import Coming from '../components/Pages/Coming.vue';
import Search from '../components/Pages/Search.vue';

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path:'/Coming',
    component: Coming
  },
  {
    path:'/Search',
    component: Search

  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
