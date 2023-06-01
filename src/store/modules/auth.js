import authApi from '@/api/auth'

const state = {
  dialogWindows: [
    {name: 'dialogRegisterVisible', value: false},
    {name: 'dialogLoginVisible', value: false},
    {name: 'dialogConfirmVisible', value: false},
    {name: 'dialogSuccessSendVisible', value: false},
    {name: 'dialogFailureSendVisible', value: false},
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
      state.validationErrors = null
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

  registerStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  registerFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

  requestCallStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  requestCallSuccess(state) {
    state.isSubmitting = false
    // окно удачной отправки
  },
  requestCallFailure(state, payload) {
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

  register(context, credentials) {
    return new Promise((resolve) => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then((response) => {
          context.commit('registerSuccess', {
            token: response.data,
            user: credentials,
          })
          context.commit('setSingleDialogVisible', 'dialogConfirmVisible')
          resolve(response.data)
          console.log('gg', response.data)
        })
        .catch((result) => {
          context.commit('registerFailure', result.response.data)
        })
    })
  },

  requestCall(context, credentials) {
    return new Promise((resolve) => {
      console.log('wp', credentials)
      context.commit('requestCallStart')
      authApi
        .requestCall(credentials)
        .then((response) => {
          context.commit('requestCallSuccess')
          // context.commit('setSingleDialogVisible', 'dialogConfirmVisible')
          context.commit('setSingleDialogVisible', 'dialogSuccessSendVisible')
          resolve(response.data)
          // console.log('gg', response.data)
        })
        .catch((result) => {
          context.commit('setSingleDialogVisible', 'dialogFailureSendVisible')
          // console.log('wp', result.response.data)
          context.commit('requestCallFailure', result.response.data)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
