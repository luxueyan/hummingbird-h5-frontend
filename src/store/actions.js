import router from '@/router'
import { login, captcha, userSelf } from '@/common/resources.js'
import * as Storage from '@/storage'
import { STORE_KEY_USER, STORE_KEY_ACCESS_TOKEN, RET_CODE_MAP, CUST_STATE_CODE_MAP, STORE_KEY_LAST_LOGINED_PHONE } from '@/constants'

export default {
  updateUser: function({ commit }, user = {}) {
    Storage.save(STORE_KEY_USER, JSON.stringify(user))
    commit('updateUser', user)
  },

  updateToken({ commit }, token = '') {
    Storage.save(STORE_KEY_ACCESS_TOKEN, token)
    commit('updateToken', token)
  },

  // // 获取用户业务状态码
  // async getCustStateCode({ commit, dispatch }) {
  //   const data = await getCustState.get().then(res => res.json())
  //   if (data.data) {
  //     console.log(data.data.StateCode = '1008')
  //     commit('updateStateCode', data.data.StateCode)
  //     commit('updateStateMsg', data.data.StateMsg)
  //   }
  //   return data
  // },

  // 获取用户信息
  async getUser({ commit, dispatch }, params = {}) {
    const data = await userSelf.get(params).then(res => res.json())
    if (data.code === RET_CODE_MAP.OK) {
      const user = data.data
      await dispatch('updateUser', user)
      if (!user.isInvited) {
        commit('updateStateCode', CUST_STATE_CODE_MAP.NOT_INVITED)
      } else if (user.isNew) {
        commit('updateStateCode', CUST_STATE_CODE_MAP.FIRST_BORROWER)
      } else if (user.currentOngoingContract) {
        commit('updateStateCode', user.currentOngoingContract.currentContractStatus.key)
      } else {
        commit('updateStateCode', CUST_STATE_CODE_MAP.DEBT_SETTELED)
      }
    }
    return data
  },

  // 获取手机验证码
  async getMsgCode({ commit, dispatch }, phone) {
    let data = await captcha.get({ phone }).then(res => res.json())
    // dispatch('updateToken', data.data)
    return data
  },

  async login({ commit, dispatch }, user) {
    // let data = await Promise.resolve({ ret: '10000' })
    let data = await login.save({}, user).then(res => res.json())
    if (data.code === RET_CODE_MAP.OK) {
      await dispatch('updateToken', data.data.token)
      await dispatch('getUser')
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
