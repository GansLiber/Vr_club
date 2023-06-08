import axios from 'axios'
import adminFeedApi from '@/api/adminFeed/adminFeedApi'
import {getItem, setItem} from '@/helpers/persistenceStorage'
import router from '@/router'

export const adminFeed = {
  state: () => ({
    data: null,
    errors: null,
    currentParams: null,
    singleItem: null,
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
    getAdminParamsFromStorage(state) {
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

    getSingleItemStart(state) {
      this.commit('global/setLoading', true)
      state.data = null
    },
    getSingleItemSuccess(state, payload) {
      this.commit('global/setLoading', false)
      state.singleItem = payload.data
    },
    getSingleItemFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.errors = payload
    },

    sendItemStart(state) {
      this.commit('global/setLoading', true)
      state.data = null
    },
    sendItemSuccess() {
      this.commit('global/setLoading', false)
    },
    sendItemFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.errors = payload
    },

    changeItemStart(state) {
      this.commit('global/setLoading', true)
      state.data = null
    },
    changeItemSuccess() {
      this.commit('global/setLoading', false)
    },
    changeItemFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.errors = payload
    },

    delItemStart(state) {
      this.commit('global/setLoading', true)
      state.data = null
    },
    delItemSuccess(state) {
      this.commit('global/setLoading', false)
      state.singleItem = null
      router.go(-1)
    },
    delItemFailure(state, payload) {
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
        adminFeedApi
          .getFeed(apiUrl.payload.api)
          .then((response) => {
            context.commit('getAdminParamsFromStorage')
            context.commit('getFeedSuccess', response.data)
            resolve(response.data)
          })
          .catch(() => {
            context.commit('getFeedFailure')
          })
      })
    },
    getSingleItem(context, id) {
      return new Promise((resolve) => {
        context.commit('getSingleItemStart')
        const token = context.getters.tokenUser
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const apiUrl = getItem('currentParams')

        adminFeedApi
          .getFeed(apiUrl.payload.api + '/' + id)
          .then((response) => {
            // context.commit('getAdminParamsFromStorage')
            context.commit('getSingleItemSuccess', response.data)
            resolve(response.data)
          })
          .catch(() => {
            context.commit('getSingleItemFailure')
          })
      })
    },
    addItem(context, credentials) {
      return new Promise((resolve) => {
        context.commit('sendItemStart')
        const token = context.getters.tokenUser
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const apiUrl = getItem('currentParams')

        adminFeedApi
          .addItem(apiUrl.payload.api, credentials)
          .then((response) => {
            // context.commit('getAdminParamsFromStorage')
            context.dispatch('getFeed').then(() => {
              context.commit('sendItemSuccess')
              resolve(response.data)
            })
          })
          .catch(() => {
            context.commit('sendItemFailure')
          })
      })
    },
    changeItem(context, credentials) {
      return new Promise((resolve) => {
        context.commit('changeItemStart')
        const token = context.getters.tokenUser
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const apiUrl = getItem('currentParams')
        adminFeedApi
          .changeItem(
            apiUrl.payload.api + '/' + credentials.id,
            credentials.item
          )
          .then((response) => {
            // context.commit('getAdminParamsFromStorage')
            context.commit('changeItemSuccess')
            resolve(response.data)
          })
          .catch(() => {
            context.commit('changeItemFailure')
          })
      })
    },
    delItem(context, id) {
      return new Promise((resolve) => {
        context.commit('delItemStart')
        const token = context.getters.tokenUser
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const apiUrl = getItem('currentParams')
        adminFeedApi
          .delItem(apiUrl.payload.api + '/' + id)
          .then((response) => {
            // context.commit('getAdminParamsFromStorage')
            context.commit('delItemSuccess')
            resolve(response.data)
          })
          .catch(() => {
            context.commit('delItemFailure')
          })
      })
    },
  },
}
