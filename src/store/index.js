import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  authenticatedUser: ''
}

const mutations = {
  login (state, user) {
    state.authenticatedUser = user
  },

  logout (state) {
    state.authenticatedUser = ''
  }
}

const getters = {
  authenticatedUser (state) {
    return state.authenticatedUser
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store
