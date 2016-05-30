import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREASE,
  DECREASE
} from './mutation-types'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  [INCREASE] (state) {
    state.count ++
  },
  [DECREASE] (state) {
    state.count --
  }
}

export default new Vuex.Store({
  state,
  mutations
})
