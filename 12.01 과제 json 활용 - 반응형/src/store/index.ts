import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checkHistory: "dashboard",
    loginCheck: false,
    saveID: "cofhr123",
    savePassword: "123123",
    members: {},
    contents: {}
  },
  getters: {
    getCheckHistory(state) {
      return state.checkHistory
    },
    getLoginCheck(state) {
      return state.loginCheck
    },
    getMembers(state) {
      return state.members
    },
    getContents(state) {
      return state.contents
    },
    getSaveID(state) {
      return state.saveID
    },
    getSavePassword(state) {
      return state.savePassword
    }
  },
  mutations: {
    setCheckHistory(state, value) {
      state.checkHistory = value
    },
    setLoginCheck(state, value) {
      state.loginCheck = value
    },
    setMember(state, value) {
      state.members = value
    },
    setContents(state, value) {
      state.contents = value
    }
  }
})
