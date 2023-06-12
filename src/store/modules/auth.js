import authApi from '@/api/auth'
import {setItem, getItem} from '@/helpers/persistenceStorage'
import axios from 'axios'
import router from '@/router'

export const auth = {
  state: () => ({
    currentUser: null,
    tokenUser: null,
    validationErrors: null,
    isLoggedIn: null,
    isAdmin: null,
  }),

  getters: {
    getToken: (state) => state.tokenUser,
  },

  mutations: {
    toZeroErrors(state) {
      state.validationErrors = null
    },

    loginStart(state) {
      this.commit('global/setLoading', true)
      state.validationErrors = null
    },
    loginSuccess(state, payload) {
      this.commit('global/setLoading', false)
      state.currentUser = payload.credentials
      state.tokenUser = payload.response.data.bearer
      state.isLoggedIn = true
      state.isAdmin = payload.response.data.role_id
    },
    loginFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.validationErrors = payload
    },

    loginAgainStart(state) {
      this.commit('global/setLoading', true)
      state.validationErrors = null
    },
    loginAgainSuccess(state, payload) {
      this.commit('global/setLoading', false)
      state.currentUser = {
        login: payload.login,
        password: payload.password,
      }
      state.tokenUser = payload.token
      state.isLoggedIn = true
      state.isAdmin = payload.role
    },
    loginAgainFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.validationErrors = payload
    },

    logoutStart(state) {
      this.commit('global/setLoading', true)
      state.validationErrors = null
    },
    logoutSuccess(state) {
      this.commit('global/setLoading', false)
      state.currentUser = null
      state.tokenUser = null
      state.isLoggedIn = false
      state.isAdmin = null
    },
    logoutFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.validationErrors = payload
    },

    registerStart(state) {
      this.commit('global/setLoading', true)
      state.validationErrors = null
    },
    registerSuccess() {
      this.commit('global/setLoading', false)
    },
    registerFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.validationErrors = payload
    },

    setToStorage(state, payload) {
      setItem('accessToken', payload.response.data.bearer)
      setItem('role', payload.response.data.role_id)
      setItem('login', payload.credentials.login)
      setItem('password', payload.credentials.password)
    },

    requestCallStart(state) {
      this.commit('global/setLoading', true)
      state.validationErrors = null
    },
    requestCallSuccess() {
      this.commit('global/setLoading', false)
      // окно удачной отправки
    },
    requestCallFailure(state, payload) {
      this.commit('global/setLoading', false)
      state.validationErrors = payload
    },
  },

  actions: {
    login(context, credentials) {
      return new Promise((resolve) => {
        context.commit('loginStart')
        authApi
          .login(credentials)
          .then((response) => {
            context.commit('loginSuccess', {
              response,
              credentials,
            })
            context.commit('setToStorage', {response, credentials})
            context.commit('setSingleDialogVisible', false)
            router.push('cabinet')
            resolve(response.data)
          })
          .catch((result) => {
            context.commit('loginFailure', result.response.data)
          })
      })
    },

    register(context, credentials) {
      return new Promise((resolve) => {
        context.commit('registerStart')
        authApi
          .register(credentials)
          .then((response) => {
            context.commit('registerSuccess')
            context.commit('setSingleDialogVisible', 'dialogConfirmVisible')
            resolve(response.data)
          })
          .catch((result) => {
            context.commit('registerFailure', result.response.data)
          })
      })
    },

    requestCall(context, credentials) {
      return new Promise((resolve) => {
        context.commit('requestCallStart')
        authApi
          .requestCall(credentials)
          .then((response) => {
            context.commit('requestCallSuccess')
            context.commit('setSingleDialogVisible', 'dialogSuccessSendVisible')
            resolve(response.data)
          })
          .catch((result) => {
            context.commit('setSingleDialogVisible', 'dialogFailureSendVisible')
            context.commit('requestCallFailure', result.response.data)
          })
      })
    },
    loginAgain(context) {
      context.commit('loginAgainStart')
      const login = getItem('login')
      const role = getItem('role')
      const token = getItem('accessToken')
      const password = getItem('password')
      if (login && token && password) {
        const payload = {
          login: login,
          role: role,
          token: token,
          password: password,
        }
        context.commit('loginAgainSuccess', payload)
      } else {
        context.commit('loginAgainFailure')
      }
    },
    logout(context) {
      context.commit('logoutStart')
      const token = context.state.tokenUser
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      authApi
        .logout()
        .then(() => {
          localStorage.clear()
          router.push('/')
          context.commit('logoutSuccess')
        })
        .catch((error) => {
          context.commit('logoutFailure', error)
        })
    },
  },
}
