import { CUST_STATE_CODE_MAP } from '@/constants.js'
// import { values } from 'lodash'
// const allStates = values(CUST_STATE_CODE_MAP)

export default {
  path: '/h5/borrow',
  name: 'borrow',
  redirect: { name: 'borrowerInfo' },
  component: {
    render(h) {
      // return h('transition', {
      //   attrs: {
      //     name: 'fade',
      //     mode: 'out-in',
      //     appear: true
      //   }
      // }, [h('router-view')])
      return h('router-view')
    }
  },
  children: [{
    path: 'borrower_info',
    name: 'borrowerInfo',
    component: resolve => require(['@/views/borrow/BorrowerInfo.vue'], resolve),
    meta: {
      title: '立即提款',
      tabBarVisible: true,
      headerHidden: true,
      hasFixedButtons: true,
      permits: [CUST_STATE_CODE_MAP.DEBT_SETTELED]
    }
  }, {
    path: 'signature',
    name: 'signature',
    component: resolve => require(['@/views/borrow/Signature.vue'], resolve),
    meta: {
      title: '合同签署',
      tabBarVisible: false,
      permits: [CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED]
    }
  }, {
    path: 'loaning',
    name: 'loaning',
    component: resolve => require(['@/views/borrow/Loaning.vue'], resolve),
    meta: {
      title: '提款请求已确认',
      tabBarVisible: true,
      permits: [CUST_STATE_CODE_MAP.LOANING]
    }
  }, {
    path: 'loan_failed',
    name: 'loanFailed',
    component: resolve => require(['@/views/borrow/LoanFailed.vue'], resolve),
    meta: {
      title: '提款失败',
      tabBarVisible: true,
      permits: [CUST_STATE_CODE_MAP.LOAN_FAILED]
    }
  }]
}
