export const globalModule = {
  state: () => ({
    isLoading: false,
    tokenUser: null,
  }),

  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading
    },
  },

  namespaced: true,
}
