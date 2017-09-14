import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { user, token } from '../stored.js'
import 'core-js/fn/promise' // for vuex

const state = {
  user: JSON.parse(user || '{}') || {}, // 很奇怪，JSON.parse(user || '{}')结果竟然是null
  stateCode: null,
  stateMsg: '',
  now: new Date(),
  token: token
}

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions
})

export default store
