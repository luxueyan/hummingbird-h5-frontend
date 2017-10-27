import { CUST_STATE_CODE_MAP, CAPTCHA_SEND_TYPE } from '@/constants.js'
// import { values } from 'lodash'
// const allStates = values(CUST_STATE_CODE_MAP)

export default [{
  path: '/h5/borrow',
  name: 'borrow',
  redirect: { name: 'borrowerInfo' },
  component: {
    render(h) {
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
      captchaSendType: CAPTCHA_SEND_TYPE.ADD_BANK_RESERVE_PHONE,
      headerShow: true,
      hasFixedButtons: true,
      permits: [CUST_STATE_CODE_MAP.DEBT_SETTELED, CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED]
    }
  }, {
    path: 'signature',
    name: 'signature',
    component: resolve => require(['@/views/borrow/Signature.vue'], resolve),
    meta: {
      title: '合同签署',
      tabBarVisible: false,
      headerBackShow: true,
      headerShow: true,
      permits: [CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED]
    }
  }, {
    path: 'loaning',
    name: 'loaning',
    component: resolve => require(['@/views/borrow/Loaning.vue'], resolve),
    meta: {
      title: '提款请求已确认',
      headerShow: true,
      tabBarVisible: true,
      permits: [CUST_STATE_CODE_MAP.LOANING]
    }
  }, {
    path: 'loan_failed',
    name: 'loanFailed',
    component: resolve => require(['@/views/borrow/LoanFailed.vue'], resolve),
    meta: {
      title: '提款失败',
      headerShow: true,
      tabBarVisible: true,
      permits: [CUST_STATE_CODE_MAP.LOAN_FAILED]
    }
  }]
}]
