import store from '@/store'

export const dialogWindow = {
  state: () => ({
    dialogWindows: [
      {name: 'dialogRegisterVisible', value: false},
      {name: 'dialogLoginVisible', value: false},
      {name: 'dialogConfirmVisible', value: false},
      {name: 'dialogSuccessSendVisible', value: false},
      {name: 'dialogFailureSendVisible', value: false},
      {name: 'dialogProtectLoginVisible', value: false},
      {name: 'dialogFailureSendDataVisible', value: false},
      {name: 'dialogProtectLoginAdminVisible', value: false},
      {name: 'dialogCapchaVisible', value: false},
    ],
    showWindow: false,
    capchaValid: false,
  }),

  mutations: {
    submitCapcha(state, isValid) {
      state.capchaValid = isValid
    },
    setSingleDialogVisible(state, prop) {
      state.dialogWindows.forEach((window) => {
        window.value = window.name === prop
      })
      store.commit('toZeroErrors')
      state.showWindow = state.dialogWindows.some((window) => window.value)
    },
  },
}
