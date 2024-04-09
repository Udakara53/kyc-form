import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormStep1 from '../views/FormStep1.vue';
import FormStep2 from '../views/FormStep2.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '', // Default child route
        redirect: 'step1',
      },
      {
        path: 'step1',
        name: 'Step1',
        component: FormStep1,
      },
      {
        path: 'step2',
        name: 'Step2',
        component: FormStep2,
      },
    ]},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
