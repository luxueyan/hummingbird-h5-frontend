import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'
import { includes } from 'lodash'
import { RET_CODE_MAP, CUST_STATE_CODE_MAP } from '../constants.js'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

// 业务状态对应页面映射表
const custStateRedirectMap = {
  [CUST_STATE_CODE_MAP.NOT_LOGIN]: { name: 'login' }, // 未登录
  [CUST_STATE_CODE_MAP.DEBT_SETTELED]: { name: 'borrowerInfo' }, // 借款结清
  [CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED]: { name: 'signature' }, // 合同信息已完成
  [CUST_STATE_CODE_MAP.NOT_INVITED]: { name: 'unauthorizedTip' }, // 未邀请
  [CUST_STATE_CODE_MAP.LOANING]: { name: 'loaning' }, // 放款中
  [CUST_STATE_CODE_MAP.LOAN_FAILED]: { name: 'loanFailed' }, // 放款失败
  [CUST_STATE_CODE_MAP.DEBT_NOT_SETTLED]: { name: 'repayInfo' }, // 借款未结清
  [CUST_STATE_CODE_MAP.REPAYING]: { name: 'repaying' }, // 还款中
  [CUST_STATE_CODE_MAP.REPAY_FAILED]: { name: 'repayFaild' }, // 还款失败
  [CUST_STATE_CODE_MAP.BLACKLIST]: { name: 'blacklistTip' }, // 黑名单客户
  [CUST_STATE_CODE_MAP.FIRST_BORROWER]: { name: 'authorizedTip' }, // 首次借款
  [CUST_STATE_CODE_MAP.UNKNOWN]: { name: 'login' } // 未知状态
}

function getRedirectRoute(stateCode) {
  return custStateRedirectMap[stateCode] || { name: 'login' }
}

router.beforeEach((to, from, next) => {
  const { user, token, stateCode } = store.getters
  if (!to.meta.skipAuth) { // 需要登录权限的页面
    if (!token || !user.phone) {
      next({ name: 'login' })
    } else {
      const stateCodePromise = new Promise((resolve, reject) => {
        if (stateCode) {
          resolve(stateCode)
        } else {
          store.dispatch('getCustStateCode').then(res => {
            if (res.ret === RET_CODE_MAP.OK) {
              resolve(res.data.StateCode)
            } else {
              reject(null)
            }
          })
        }
      })

      stateCodePromise.then(code => {
        console.log(to.meta.permits)
        if (includes(to.meta.permits, code)) {
          next()
        } else {
          next(getRedirectRoute(code))
        }
      })
    }
  } else { // 不需要权限的页面不拦截
    next()
  }
})

router.afterEach((to) => {
  if (to.name !== undefined) {
    document.body.setAttribute('class', to.name)
  }

  if (to.meta.title) {
    document.title = to.meta.title
    document.body.setAttribute('page', to.name)

    // hack ios title not update bug
    const iframe = document.createElement('iframe')
    iframe.classList.add('dn')
    iframe.src = require('../assets/images/clear.png')
    document.body.appendChild(iframe)
    iframe.onload = () => {
      setTimeout(() => {
        iframe.onload = null
        document.body.removeChild(iframe)
      }, 10)
    }
  }
})

export default router
