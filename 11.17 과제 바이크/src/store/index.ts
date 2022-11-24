import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    suggestionsNumber: 1325967,
    productID: 0,

    heart: {
      
    }
  },
  getters: {
    getSuggestionsNumber(state) {
      return state.suggestionsNumber
    },
    getHeart(state) {
      
      return state.heart
    },
    getInfo(state) {
      return state.productID
    }
  },
  mutations: {
    setSuggestionsNumber(state, value) {
      state.suggestionsNumber = value
    },
    setHeart(state,value) {
      state.heart = value
    },
    setInfo(state, value) {
      state.productID = value
    }
  }
})
