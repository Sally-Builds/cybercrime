import Vue from 'vue'

import Vuex from 'vuex'
import questions from './questions'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      questions,
    },
  })
}

export default createStore
