import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  authenticatedUser: ''
}

const mutations = {
  login (state, payload) {
    state.authenticatedUser = payload.user
  },

  logout (state) {
    state.authenticatedUser = ''
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
