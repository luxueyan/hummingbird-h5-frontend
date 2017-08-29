import router from '../router'
import { loginByPhone, sendMsgFromPhone, queryMyAccount, getCustState } from '../common/resources.js'
import * as Storage from '../storage'
import { STORE_KEY_USER, STORE_KEY_ACCESS_TOKEN, RET_CODE_MAP } from '../constants'

export default {
  updateUser: function({ commit }, user = {}) {
    Storage.save(STORE_KEY_USER, JSON.stringify(user))
    commit('updateUser', user)
  },

  updateToken({ commit }, token = '') {
    Storage.save(STORE_KEY_ACCESS_TOKEN, token)
    commit('updateToken', token)
  },

  // 获取用户业务状态码
  async getCustStateCode({ commit, dispatch }) {
    const data = await getCustState.get().then(res => res.json())
    if (data.data) {
      console.log(data.data.StateCode = '1008')
      commit('updateStateCode', data.data.StateCode)
      commit('updateStateMsg', data.data.StateMsg)
    }
    return data
  },

  // 获取用户信息
  async getUser({ commit, dispatch }, params = {}) {
    const data = await queryMyAccount.get(params).then(res => res.json())
    const user = data.data
    if (user) {
      user.phone = user.UserinfoValLogin.Userphone // eslint-disable
      dispatch('updateUser', user)
    }
    return data
  },

  // 获取手机验证码
  async getMsgCode({ commit, dispatch }, phone) {
    let data = await sendMsgFromPhone.get({ phone }).then(res => res.json())
    dispatch('updateToken', data.data)
    return data
  },

  async login({ commit, dispatch }, user) {
    // let data = await Promise.resolve({ ret: '10000' })
    let data = await loginByPhone.save({}, user).then(res => res.json())
    if (data.ret === RET_CODE_MAP.OK) await dispatch('getUser')

    return data
  },

  logout({ commit, state }, silent) {
    Storage.clearMulti([STORE_KEY_USER, STORE_KEY_ACCESS_TOKEN])
    commit('updateUser', { phone: state.user.phone })
    commit('updateToken')

    if (silent) return

    router.push({
      name: 'login'
    })
  }
}
