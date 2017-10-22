import { CUST_STATE_CODE_MAP, CAPTCHA_SEND_TYPE } from '@/constants.js'
import { values } from 'lodash'
const allStates = values(CUST_STATE_CODE_MAP)

export default [{
  path: '/',
  redirect: { name: 'borrowerInfo' }
}, {
  path: '/h5/login',
  name: 'login',
  component: resolve => require(['@/views/common/Login.vue'], resolve),
  meta: {
    title: '蜂鸟速贷',
    captchaSendType: CAPTCHA_SEND_TYPE.USER_LOGIN, // 验证码发送的类型
    tabBarVisible: false,
    skipAuth: true
  }
}, {
  path: '/h5/notification',
  name: 'notification',
  component: resolve => require(['@/views/common/Notification.vue'], resolve),
  meta: {
    title: '蜂鸟搬家了',
    tabBarVisible: false,
    skipAuth: true
  }
}, {
  path: '/h5/blacklist_tip',
  name: 'blacklistTip',
  component: resolve => require(['@/views/common/BlacklistTip.vue'], resolve),
  meta: {
    title: '蜂鸟速贷',
    tabBarVisible: false,
    permits: [CUST_STATE_CODE_MAP.BLACKLIST]
  }
}, {
  path: '/h5/unauthorized_tip',
  name: 'unauthorizedTip',
  component: resolve => require(['@/views/common/UnauthorizedTip.vue'], resolve),
  meta: {
    title: '蜂鸟速贷',
    tabBarVisible: false,
    permits: [CUST_STATE_CODE_MAP.NOT_INVITED]
  }
}, {
  path: '/h5/authorized_tip',
  name: 'authorizedTip',
  component: resolve => require(['@/views/common/AuthorizedTip.vue'], resolve),
  meta: {
    title: '蜂鸟速贷',
    headerHidden: true,
    tabBarVisible: false,
    permits: [CUST_STATE_CODE_MAP.FIRST_BORROWER]
  }
}, {
  path: '/h5/loan_agreement',
  name: 'loanAgreement',
  component: resolve => require(['@/views/common/LoanAgreement.vue'], resolve),
  meta: {
    title: '借款服务协议',
    tabBarVisible: false,
    headerBackShow: true,
    permits: allStates
  }
}, {
  path: '/h5/register_agreement',
  name: 'registerAgreement',
  component: resolve => require(['@/views/common/RegisterAgreement.vue'], resolve),
  meta: {
    title: '注册与服务合同',
    tabBarVisible: false,
    skipAuth: true,
    headerBackShow: true,
    permits: allStates
  }
}]
