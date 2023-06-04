const state = {
  isLoading: false,
  tokenUser: null,
}

const mutations = {
  setLoading(state, isLoading) {
    state.isLoading = isLoading
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
