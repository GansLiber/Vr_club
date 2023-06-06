import axios from 'axios'
import adminFeedApi from '@/api/adminFeed/adminFeedApi'
import {getItem, setItem} from '@/helpers/persistenceStorage'

export const adminFeed = {
  state: () => ({
    data: null,
    errors: null,
    currentParams: null,
  }),

  getters: {
    tokenUser(state, getters, rootState) {
      return rootState.auth.tokenUser
    },
  },

  mutations: {
    setAdminFeedToStorage(state, payload) {
      setItem('currentParams', payload)
    },
    getAdminFeedFromStorage(state) {
      state.currentParams = getItem('currentParams')
    },

    getFeedStart(state) {
      this.commit('global/setLoading', true)
      state.data = null
    },
    getFeedSuccess(state, payload) {
      this.commit('global/setLoading', false)
      state.data = payload.data
    },
    getFeedFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.errors = payload
    },
  },

  actions: {
    getFeed(context) {
      return new Promise((resolve) => {
        context.commit('getFeedStart')
        const token = context.getters.tokenUser
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const apiUrl = getItem('currentParams')
        console.log('ff', apiUrl.payload.api)
        adminFeedApi
          .getFeed(apiUrl.payload.api)
          .then((response) => {
            context.commit('getAdminFeedFromStorage')
            context.commit('getFeedSuccess', response.data)
            resolve(response.data)
          })
          .catch(() => {
            context.commit('getFeedFailure')
          })
      })
    },
  },
}
