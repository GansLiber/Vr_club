import authApi from '@/api/auth'
import app from '@/App'
import login from '@/components/modalWindows/Login'

const state = {
  dialogWindows: [
    {name: 'dialogRegisterVisible', value: false},
    {name: 'dialogLoginVisible', value: false},
    {name: 'dialogConfirmVisible', value: false},
    {name: 'dialogRestoreVisible', value: false},
  ],
  isSubmitting: false,
}

const mutations = {
  // dialog Windows
  clearDialogVisible(state) {
    state.dialogWindows.forEach((window) => {
      window.value = false
    })
    console.log(state.dialogWindows)
  },
  setSingleDialogVisible(state, prop) {
    state.dialogWindows.forEach((window) => {
      window.value = window.name === prop
    })
    console.log(state.dialogWindows)
  },

  registerStart(state) {
    state.isSubmitting = true
  },
  registerSuccess(state) {
    state.isSubmitting = false
  },
  registerFailure(state) {
    state.isSubmitting = false
  },
}

const actions = {
  login(context, credentials) {
    return new Promise((resolve) => {
      context.commit('registerStart')
      authApi
        .login(credentials)
        .then((response) => {
          console.log('response', response.data)
          context.commit('registerSuccess', response.data)
          resolve(response.data)
        })
        .catch((result) => {
          console.log('result errors', result.response.data)
          context.commit('registerFailure', result.response.data)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
