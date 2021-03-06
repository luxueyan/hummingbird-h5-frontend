import router from '@/router'
import { login, captcha, userSelf, wxOpenID } from '@/common/resources.js'
import * as Storage from '@/storage'
import { STORE_KEY_USER, STORE_KEY_ACCESS_TOKEN, RET_CODE_MAP, CUST_STATE_CODE_MAP, STORE_KEY_LAST_LOGINED_PHONE } from '@/constants'
import { each } from 'lodash'

export default {
  updateUser: function({ commit }, user = {}) {
    Storage.save(STORE_KEY_USER, JSON.stringify(user))
    commit('updateUser', user)
  },

  updateToken({ commit }, token = '') {
    Storage.save(STORE_KEY_ACCESS_TOKEN, token)
    commit('updateToken', token)
  },

  // 提交微信授权的code给后端
  async submitCode({ commit }, code) {
    const data = await wxOpenID.save({ code }).then(res => res.json())
    commit('upateOpenId', data.data.openId || '')
    return data
  },

  // 获取用户信息
  async getUser({ commit, dispatch }, params = {}) {
    const data = await userSelf.get(params).then(res => res.json())
    if (data.code === RET_CODE_MAP.OK) {
      const user = data.data
      each(user.productInfo, p => {
        p.serviceFee = p.creditFee + p.manageFee
      })
      await dispatch('updateUser', user)
      if (user.isNew) {
        commit('updateStateCode', CUST_STATE_CODE_MAP.FIRST_BORROWER)
      }

      if (user.currentOngoingContract) {
        commit('updateStateCode', '' + user.currentOngoingContract.currentContractStatus.key)
      } else if (!user.isNew) {
        commit('updateStateCode', CUST_STATE_CODE_MAP.DEBT_SETTELED)
      }
      // commit('updateStateCode', CUST_STATE_CODE_MAP.FIRST_BORROWER)
    }
    return data
  },

  // 获取手机验证码
  async getMsgCode({ commit, dispatch }, params = {}) {
    let data = await captcha.get(params).then(res => res.json())
    // dispatch('updateToken', data.data)
    return data
  },

  async login({ commit, dispatch }, user) {
    // let data = await Promise.resolve({ ret: '10000' })
    let data = await login.save({}, user).then(res => res.json())
    if (data.code === RET_CODE_MAP.OK) {
      await dispatch('updateToken', data.data.token)
      const user = await dispatch('getUser')
      if (data.data.user) user.openId = data.data.user.openId
      data.user = user
    }
    return data
  },

  logout({ commit, state }, silent) {
    Storage.clearMulti([STORE_KEY_USER, STORE_KEY_ACCESS_TOKEN])
    Storage.save(STORE_KEY_LAST_LOGINED_PHONE, state.user.phone || '')
    commit('updateUser', { phone: state.user.phone })
    commit('updateToken')

    if (silent) return

    router.push({
      name: 'login'
    })
  }
}
