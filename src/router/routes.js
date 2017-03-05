import { CUST_STATE_CODE_MAP } from '../constants.js'

export default [{
  path: '/',
  redirect: '/h5/borrow/borrower_info'
}, {
  path: '/h5/login',
  name: 'login',
  component: resolve => require(['../views/Login.vue'], resolve),
  meta: {
    title: '练习App开发-登录',
    skipAuth: true
      // permits: [999, 7777]
  }
}, {
  path: '/h5/blacklist_tip',
  name: 'blacklistTip',
  component: resolve => require(['../views/BlacklistTip.vue'], resolve),
  meta: {
    title: '练习App开发-黑名单',
    permits: [CUST_STATE_CODE_MAP.BLACKLIST]
  }
}, {
  path: '/h5/unauthorized_tip',
  name: 'unauthorizedTip',
  component: resolve => require(['../views/UnauthorizedTip.vue'], resolve),
  meta: {
    title: '练习App开发-未授权',
    permits: [CUST_STATE_CODE_MAP.NOT_INVITED]
  }
}, {
  path: '/h5/authorized_tip',
  name: 'authorizedTip',
  component: resolve => require(['../views/AuthorizedTip.vue'], resolve),
  meta: {
    title: '练习App开发-欢迎',
    permits: [CUST_STATE_CODE_MAP.FIRST_BORROWER]
  }
}, {
  path: '/h5/borrow',
  name: 'borrow',
  redirect: '/h5/borrow/borrower_info',
  component: resolve => require(['../views/borrow/Layout.vue'], resolve),
  children: [{
    path: 'borrower_info',
    name: 'borrowerInfo',
    component: resolve => require(['../views/borrow/BorrowerInfo.vue'], resolve),
    meta: {
      title: '练习App开发-借款-填写信息',
      permits: [CUST_STATE_CODE_MAP.DEBT_SETTELED]
    }
  }, {
    path: 'signature',
    name: 'signature',
    component: resolve => require(['../views/borrow/Signature.vue'], resolve),
    meta: {
      title: '练习App开发-借款-签名',
      permits: [CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED]
    }
  }]
}, {
  path: '*',
  redirect: '/'
}]
