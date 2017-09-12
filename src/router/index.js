import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'
import { includes, find, map, isString, flattenDeep } from 'lodash'
import { RET_CODE_MAP, CUST_STATE_CODE_MAP } from '../constants.js'
import { Toast } from 'mint-ui'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: ~process.env.NODE_ENV.indexOf('app') ? 'hash' : 'history',
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
  // [CUST_STATE_CODE_MAP.NOT_LOGIN]: { name: 'login' }, // 未登录
  [CUST_STATE_CODE_MAP.DEBT_SETTELED]: { name: 'borrowerInfo' }, // 借款结清
  [CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED]: { name: 'signature' }, // 合同信息已完成
  [CUST_STATE_CODE_MAP.NOT_INVITED]: { name: 'unauthorizedTip' }, // 未邀请
  [CUST_STATE_CODE_MAP.LOANING]: { name: 'loaning' }, // 放款中
  [CUST_STATE_CODE_MAP.LOAN_FAILED]: { name: 'loanFailed' }, // 放款失败
  [CUST_STATE_CODE_MAP.DEBT_NOT_SETTLED]: { name: 'repayInfo' }, // 借款未结清
  [CUST_STATE_CODE_MAP.REPAYING]: { name: 'repaying' }, // 还款中
  [CUST_STATE_CODE_MAP.REPAY_FAILED]: { name: 'repayFailed' }, // 还款失败
  // [CUST_STATE_CODE_MAP.BLACKLIST]: { name: 'blacklistTip' }, // 黑名单客户
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
      next({ name: 'login', query: { redirect: to.fullPath } })
    } else {
      const stateCodePromise = new Promise((resolve, reject) => {
        if (stateCode) {
          resolve(stateCode)
        } else {
          store.dispatch('getUser').then(res => {
            if (res.code === RET_CODE_MAP.OK) {
              const newStateCode = store.getters.stateCode
              resolve(newStateCode)
              if (newStateCode === CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED) {
                Toast({
                  message: '您有一笔合同已提交但没有签署'
                })
              }
              // 状态异常账户
              if (newStateCode === CUST_STATE_CODE_MAP.UNKNOWN) {
                Toast({
                  message: '账户状态异常！'
                })
              }
            } else {
              reject(null)
            }
          })
        }
      })

      stateCodePromise.then(code => {
        if (includes(to.meta.permits, code)) {
          next()
        } else {
          next(getRedirectRoute(code))
        }
      }).catch(() => {
        next({ name: 'login', query: { redirect: to.fullPath } })
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
    iframe.src = require('assets/images/clear.png')
    document.body.appendChild(iframe)
    iframe.onload = () => {
      setTimeout(() => {
        iframe.onload = null
        document.body.removeChild(iframe)
      }, 10)
    }
  }
})

// 扁平化路由
function flattenRoutes(routes) {
  return map(routes, r => {
    if (!r.children) {
      return r
    }
    return [r].concat(flattenRoutes(r.children))
  })
}

const flatRoutes = flattenDeep(flattenRoutes(routes))

Vue.getPermits = Vue.prototype.getPermits = function(routeName) {
  if (isString(routeName)) routeName = [routeName]
  const permits = map(routeName, rn => {
    const router = find(flatRoutes, r => r.name === rn)
    return router ? router.meta.permits : []
  })
  return flattenDeep(permits)
  // const router = find(flatRoutes, r => r.name === routeName)
  // return router ? router.meta.permits : []
}

Vue.isPermit = Vue.prototype.isPermit = function(routeName) {
  return includes(Vue.getPermits(routeName), store.getters.stateCode)
}

export default router
