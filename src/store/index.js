import {createStore} from 'vuex'

import auth from '@/store/modules/auth'
import adminFeed from '@/store/modules/adminFeed'
import dialogWindow from '@/store/modules/dialogWindow'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    adminFeed,
    dialogWindow,
  },
})
