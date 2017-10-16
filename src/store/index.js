import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import getters from '@/store/getters'
import actions from '@/store/actions'
import { user, token } from '@/stored.js'
import 'core-js/fn/promise' // for vuex

const state = {
  user: JSON.parse(user || '{}') || {}, // 很奇怪，JSON.parse(user || '{}')结果竟然是null
  stateCode: null,
  stateMsg: '',
  updaterProgressValue: 0,
  updaterProgressVisible: false,
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
