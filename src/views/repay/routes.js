import { CUST_STATE_CODE_MAP } from '@/constants.js'
// import { values } from 'lodash'
// const allStates = values(CUST_STATE_CODE_MAP)

export default [{
  path: '/h5/repay',
  name: 'repay',
  redirect: { name: 'repayInfo' },
  component: {
    render(h) {
      return h('router-view')
    }
  },
  children: [{
    path: 'repay_info',
    name: 'repayInfo',
    component: resolve => require(['@/views/repay/RepayInfo.vue'], resolve),
    meta: {
      title: '立即还款',
      tabBarVisible: true,
      headerShow: true,
      hasFixedButtons: true,
      permits: [CUST_STATE_CODE_MAP.DEBT_NOT_SETTLED]
    }
  }, {
    path: 'repaying',
    name: 'repaying',
    component: resolve => require(['@/views/repay/Repaying.vue'], resolve),
    meta: {
      title: '还款请求已确认',
      tabBarVisible: true,
      headerShow: true,
      permits: [CUST_STATE_CODE_MAP.REPAYING]
    }
  }, {
    path: 'repay_failed',
    name: 'repayFailed',
    component: resolve => require(['@/views/repay/RepayFailed.vue'], resolve),
    meta: {
      title: '还款失败',
      tabBarVisible: true,
      headerShow: true,
      permits: [CUST_STATE_CODE_MAP.REPAY_FAILED]
    }
  }]
}]
