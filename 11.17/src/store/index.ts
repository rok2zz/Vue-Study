import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myNumber: 0,
    myString: "",
    myArray: [],
    myObject: {
      a: 1,
      b: 2,
      c: 3
    },
    websiteSettings: {
      darkMode: false,
      language: "ko",
      level: 3
   }

  },
  getters: {
    getMyNumber(state) {
      return state.myNumber
    },
    getWebsiteSettings(state) {
      return state.websiteSettings
    }
  },
  mutations: {
    setMyNumber(state, value) {
      state.myNumber = value
    },
    setWebsiteSettings(state, value) {
      state.websiteSettings = value
    }
  }
})
