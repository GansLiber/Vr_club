import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/Home.vue'
import About from '@/views/About'
import Cabinet from '@/views/Cabinet'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/cabinet',
    name: 'cabinet',
    component: Cabinet,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (!store.state.auth.isLoggedIn && to.name === 'cabinet') {
    next('/')
    store.commit('setSingleDialogVisible', 'dialogProtectVisible')
  } else {
    next()
  }
})

export default router
