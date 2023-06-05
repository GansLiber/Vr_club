import axios from 'axios'
import adminFeedApi from '@/api/adminFeed/adminFeedApi'

export const adminFeed = {
  state: () => ({
    data: null,
    errors: null,
  }),

  getters: {
    tokenUser(state, getters, rootState) {
      return rootState.auth.tokenUser
    },
  },

  mutations: {
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
    getFeed(context, {apiUrl}) {
      return new Promise((resolve) => {
        context.commit('getFeedStart')
        const token = context.getters.tokenUser
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        console.log('gg', apiUrl)
        adminFeedApi
          .getFeed(apiUrl)
          .then((response) => {
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
