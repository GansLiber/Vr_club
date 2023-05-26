import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/Home.vue'
import RestorePassword from '@/views/RestorePassword'
import About from '@/views/About'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/restorePassword',
    name: 'restorePassword',
    component: RestorePassword,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
