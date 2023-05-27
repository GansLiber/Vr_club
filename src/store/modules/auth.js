import authApi from '@/api/auth'
import app from '@/App'
import login from '@/components/modalWindows/Login'

const state = {
  dialogWindows: [
    {name: 'dialogRegisterVisible', value: false},
    {name: 'dialogLoginVisible', value: false},
    {name: 'dialogConfirmVisible', value: false},
  ],
  isSubmitting: false,
  currentUser: null,
  tokenUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

const mutations = {
  // dialog Windows
  // clearDialogVisible(state) {
  //   state.dialogWindows.forEach((window) => {
  //     window.value = false
  //   })
  //   console.log(state.dialogWindows)
  // },
  setSingleDialogVisible(state, prop) {
    state.dialogWindows.forEach((window) => {
      window.value = window.name === prop
    })
  },

  loginStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  loginSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  loginFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
}

const actions = {
  login(context, credentials) {
    return new Promise((resolve) => {
      context.commit('loginStart')
      authApi
        .login(credentials)
        .then((response) => {
          context.commit('loginSuccess', {
            token: response.data,
            user: credentials,
          })
          context.commit('setSingleDialogVisible', false)
          resolve(response.data)
          console.log('gg', response.data)
        })
        .catch((result) => {
          context.commit('loginFailure', result.response.data)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
