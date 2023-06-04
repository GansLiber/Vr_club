import axios from 'axios'

const state = {
  data: null,
  errors: null,
}

const mutations = {
  getFeedStart(state) {
    this.commit('global/setLoading', true)
    state.data = null
  },
  getFeedSuccess(state, payload) {
    this.commit('global/setLoading', false)
    state.data = payload
  },
  getFeedFailure(state, payload) {
    this.commit('global/setLoading', false)
    state.errors = payload
  },
}

const actions = {
  getFeed(context, {apiUrl}) {
    return new Promise((resolve) => {
      context.commit('getFeedStart')
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
