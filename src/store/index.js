import {createStore} from 'vuex'

import auth from '@/store/modules/auth'
import adminFeed from '@/store/modules/adminFeed'
import dialogWindow from '@/store/modules/dialogWindow'
import globalModule from '@/store/modules/globalModule'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    global: globalModule,
    auth,
    adminFeed,
    dialogWindow,
  },
})
