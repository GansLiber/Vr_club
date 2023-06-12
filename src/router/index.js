import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/Home.vue'
import About from '@/views/About'
import Cabinet from '@/views/Cabinet'
import store from '@/store'
import kursAdmin from '@/components/adminPanel/Admin'
import AdminMainForm from '@/components/adminPanel/AdminMainForm'
import AdminCategories from '@/components/adminPanel/AdminCategories'
import AdminLayout from '@/views/AdminLayout'
import AdminCategoryItem from '@/components/adminPanel/AdminCategoryItem'

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

  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'categories',
        component: kursAdmin,
      },
      {
        path: ':category',
        name: 'category',
        component: AdminMainForm,
        children: [
          {
            path: '',
            name: 'categoryList',
            component: AdminCategories,
          },
          {
            path: ':id',
            name: 'categoryItem',
            component: AdminCategoryItem,
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (!store.state.auth.isAdmin && to.name === 'admin') {
    next('/')
    console.log('gabella')
    // store.commit('setSingleDialogVisible', 'dialogProtectVisible')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (!store.state.auth.isLoggedIn && to.name === 'cabinet') {
    next('/')
    store.commit('setSingleDialogVisible', 'dialogProtectLoginVisible')
  } else {
    next()
  }
})

export default router
