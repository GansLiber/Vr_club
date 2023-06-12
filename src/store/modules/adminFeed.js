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
    sideFeedsStore: null,
  }),

  getters: {
    tokenUser(state, getters, rootState) {
      return rootState.auth.tokenUser
    },
  },

  mutations: {
    dataReset(state) {
      state.data = null
      state.errors = null
      state.singleItem = null
      state.sideFeedsStore = null
    },

    setAdminFeedToStorage(state, payload) {
      setItem('currentParams', payload)
    },
    getAdminParamsFromStorage(state) {
      state.currentParams = getItem('currentParams')
    },

    getFeedStart() {
      this.commit('global/setLoading', true)
      this.commit('dataReset')
    },
    getFeedSuccess(state, payload) {
      this.commit('global/setLoading', false)
      state.data = payload.data.reverse()
    },
    getFeedFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.errors = payload
    },

    getSideFeedStart() {
      this.commit('global/setLoading', true)
      this.commit('dataReset')
    },
    getSideFeedSuccess(state, payload) {
      console.log(payload)
      state.sideFeedsStore = payload
      this.commit('global/setLoading', false)
    },
    getSideFeedFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.errors = payload
    },

    getSingleItemStart() {
      this.commit('global/setLoading', true)
      this.commit('dataReset')
    },
    getSingleItemSuccess(state, payload) {
      this.commit('global/setLoading', false)
      state.singleItem = payload.data
    },
    getSingleItemFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.errors = payload
    },

    sendItemStart() {
      this.commit('global/setLoading', true)
      this.commit('dataReset')
    },
    sendItemSuccess() {
      this.commit('global/setLoading', false)
    },
    sendItemFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.errors = payload
    },

    changeItemStart() {
      this.commit('global/setLoading', true)
      this.commit('dataReset')
    },
    changeItemSuccess() {
      this.commit('global/setLoading', false)
    },
    changeItemFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.errors = payload
    },

    delItemStart() {
      this.commit('global/setLoading', true)
      this.commit('dataReset')
    },
    delItemSuccess() {
      this.commit('global/setLoading', false)
      this.commit('dataReset')
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
            context.commit(
              'setSingleDialogVisible',
              'dialogFailureSendDataVisible'
            )
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
            context.commit(
              'setSingleDialogVisible',
              'dialogFailureSendDataVisible'
            )
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
            context.commit(
              'setSingleDialogVisible',
              'dialogFailureSendDataVisible'
            )
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
            context.commit(
              'setSingleDialogVisible',
              'dialogFailureSendDataVisible'
            )
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
            context.commit(
              'setSingleDialogVisible',
              'dialogFailureSendDataVisible'
            )
            context.commit('delItemFailure')
          })
      })
    },
    async getSideFeed(context) {
      return new Promise((resolve, reject) => {
        context.commit('getSideFeedStart')
        const token = context.getters.tokenUser
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const apiUrl = getItem('currentParams')
        const sideRequests = []
        console.log('pap')
        if (!apiUrl.payload.sideFieldsLocal) {
          return
        }

        for (const sideField of apiUrl.payload.sideFieldsLocal) {
          sideRequests.push(adminFeedApi.getFeed(sideField.api))
        }

        Promise.all(sideRequests)
          .then((responses) => {
            context.commit('getAdminParamsFromStorage')
            const allSide = responses.map((response) => response.data)

            context.commit('getSideFeedSuccess', allSide)
            resolve(responses.data)
          })
          .catch((error) => {
            context.commit(
              'setSingleDialogVisible',
              'dialogFailureSendDataVisible'
            )
            context.commit('getSideFeedFailure')
            reject(error)
          })
      })
    },
  },
}
