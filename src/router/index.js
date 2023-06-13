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
import Reservation from '@/views/Reservation'
import Price from '@/views/Price'
import Promotions from '@/views/Promotions'

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
    path: '/reservation',
    name: 'reservation',
    component: Reservation,
  },
  {
    path: '/price',
    name: 'price',
    component: Price,
  },
  {
    path: '/promotions',
    name: 'promotions',
    component: Promotions,
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
    meta: {
      requiresAdmin: true,
    },
    children: [
      {
        path: '',
        name: 'categories',
        component: kursAdmin,
        meta: {
          requiresAdmin: true,
        },
      },
      {
        path: ':category',
        name: 'category',
        component: AdminMainForm,
        meta: {
          requiresAdmin: true,
        },
        children: [
          {
            path: '',
            name: 'categoryList',
            component: AdminCategories,
            meta: {
              requiresAdmin: true,
            },
          },
          {
            path: ':id',
            name: 'categoryItem',
            component: AdminCategoryItem,
            meta: {
              requiresAdmin: true,
            },
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
  if (!store.state.auth.isLoggedIn && to.name === 'cabinet') {
    next('/')
    store.commit('setSingleDialogVisible', 'dialogProtectLoginVisible')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (store.state.auth.isAdmin === 2) {
      next('/')
      store.commit('setSingleDialogVisible', 'dialogProtectLoginAdminVisible')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
