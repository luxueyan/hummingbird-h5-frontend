import { CUST_STATE_CODE_MAP } from '../constants.js'
import { values } from 'lodash'
const allStates = values(CUST_STATE_CODE_MAP)

export default [{
  path: '/',
  redirect: { name: 'borrowerInfo' }
}, {
  path: '/h5/login',
  name: 'login',
  component: resolve => require(['../views/Login.vue'], resolve),
  meta: {
    title: '蜂鸟速贷',
    skipAuth: true
      // permits: [999, 7777]
  }
}, {
  path: '/h5/blacklist_tip',
  name: 'blacklistTip',
  component: resolve => require(['../views/BlacklistTip.vue'], resolve),
  meta: {
    title: '蜂鸟速贷',
    permits: [CUST_STATE_CODE_MAP.BLACKLIST]
  }
}, {
  path: '/h5/unauthorized_tip',
  name: 'unauthorizedTip',
  component: resolve => require(['../views/UnauthorizedTip.vue'], resolve),
  meta: {
    title: '蜂鸟速贷',
    permits: [CUST_STATE_CODE_MAP.NOT_INVITED]
  }
}, {
  path: '/h5/authorized_tip',
  name: 'authorizedTip',
  component: resolve => require(['../views/AuthorizedTip.vue'], resolve),
  meta: {
    title: '蜂鸟速贷',
    permits: [CUST_STATE_CODE_MAP.FIRST_BORROWER]
  }
}, {
  path: '/h5/loan_agreement',
  name: 'loanAgreement',
  component: resolve => require(['../views/LoanAgreement.vue'], resolve),
  meta: {
    title: '借款服务协议',
    headerBackShow: true,
    permits: allStates
  }
}, {
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
    component: resolve => require(['../views/borrow/BorrowerInfo.vue'], resolve),
    meta: {
      title: '立即提款',
      headerHidden: true,
      hasFixedButtons: true,
      permits: [CUST_STATE_CODE_MAP.DEBT_SETTELED]
    }
  }, {
    path: 'signature',
    name: 'signature',
    component: resolve => require(['../views/borrow/Signature.vue'], resolve),
    meta: {
      title: '合同签署',
      permits: [CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED]
    }
  }, {
    path: 'loaning',
    name: 'loaning',
    component: resolve => require(['../views/borrow/Loaning.vue'], resolve),
    meta: {
      title: '提款请求已确认',
      permits: [CUST_STATE_CODE_MAP.LOANING]
    }
  }, {
    path: 'loan_failed',
    name: 'loanFailed',
    component: resolve => require(['../views/borrow/LoanFailed.vue'], resolve),
    meta: {
      title: '提款失败',
      permits: [CUST_STATE_CODE_MAP.LOAN_FAILED]
    }
  }]
}, {
  path: '/h5/repay',
  name: 'repay',
  redirect: { name: 'repayerInfo' },
  component: {
    render(h) {
      return h('router-view')
    }
  },
  children: [{
    path: '/h5/repay_info',
    name: 'repayInfo',
    component: resolve => require(['../views/repay/RepayInfo.vue'], resolve),
    meta: {
      title: '立即还款',
      headerHidden: true,
      hasFixedButtons: true,
      permits: [CUST_STATE_CODE_MAP.DEBT_NOT_SETTLED]
    }
  }, {
    path: '/h5/repaying',
    name: 'repaying',
    component: resolve => require(['../views/repay/Repaying.vue'], resolve),
    meta: {
      title: '还款请求已确认',
      permits: [CUST_STATE_CODE_MAP.REPAYING]
    }
  }, {
    path: '/h5/repay_failed',
    name: 'repayFailed',
    component: resolve => require(['../views/repay/RepayFailed.vue'], resolve),
    meta: {
      title: '还款失败',
      permits: [CUST_STATE_CODE_MAP.REPAY_FAILED]
    }
  }]
}, {
  path: '/h5/change_bank_card',
  name: 'changeBankCard',
  redirect: { name: 'changeBankCardStep1' },
  component: {
    render(h) {
      return h('router-view')
    }
  },
  children: [{
    path: 'step1',
    name: 'changeBankCardStep1',
    component: resolve => require(['../views/account/ChangeBankCardStep1.vue'], resolve),
    meta: {
      title: '变更银行卡（1/2）',
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: 'step2',
    name: 'changeBankCardStep2',
    component: resolve => require(['../views/account/ChangeBankCardStep2.vue'], resolve),
    meta: {
      title: '变更银行卡（2/2）',
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: 'step3',
    name: 'changeBankCardStep3',
    component: resolve => require(['../views/account/ChangeBankCardStep3.vue'], resolve),
    meta: {
      title: '银行卡变更成功',
      // headerBackShow: true,
      permits: allStates
    }
  }]
}, {
  path: '*',
  redirect: '/'
}]
