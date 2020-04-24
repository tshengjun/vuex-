import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'
import getters from './getters'

Vue.use(Vuex)

const state = {
  counter: 0,
  asyncCounter: 0,
  gettersCount: 2
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a: moduleA
  },
})
