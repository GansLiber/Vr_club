import store from '@/store'

export const dialogWindow = {
  state: () => ({
    dialogWindows: [
      {name: 'dialogRegisterVisible', value: false},
      {name: 'dialogLoginVisible', value: false},
      {name: 'dialogConfirmVisible', value: false},
      {name: 'dialogSuccessSendVisible', value: false},
      {name: 'dialogFailureSendVisible', value: false},
      {name: 'dialogProtectVisible', value: false},
    ],
    showWindow: false,
  }),

  mutations: {
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
      store.commit('toZeroErrors')
      state.showWindow = state.dialogWindows.some((window) => window.value)
    },
  },
}
