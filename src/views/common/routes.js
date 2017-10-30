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
    title: '极速蜂鸟',
    captchaSendType: CAPTCHA_SEND_TYPE.USER_LOGIN, // 验证码发送的类型
    tabBarVisible: false,
    headerShow: true,
    headerBackShow: true,
    skipAuth: true
  }
}, {
  path: '/h5/authorized_tip',
  name: 'authorizedTip',
  component: resolve => require(['@/views/common/AuthorizedTip.vue'], resolve),
  meta: {
    title: '极速蜂鸟',
    headerShow: true,
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
    headerShow: true,
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
    headerShow: true,
    permits: allStates
  }
}]
