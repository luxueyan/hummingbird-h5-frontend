import { CUST_STATE_CODE_MAP } from '@/constants.js'
import { values } from 'lodash'
const allStates = values(CUST_STATE_CODE_MAP)

export default [{
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
    component: resolve => require(['@/views/account/ChangeBankCardStep1.vue'], resolve),
    meta: {
      title: '变更银行卡（1/2）',
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: 'step2',
    name: 'changeBankCardStep2',
    component: resolve => require(['@/views/account/ChangeBankCardStep2.vue'], resolve),
    meta: {
      title: '变更银行卡（2/2）',
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: 'step3',
    name: 'changeBankCardStep3',
    component: resolve => require(['@/views/account/ChangeBankCardStep3.vue'], resolve),
    meta: {
      title: '银行卡变更成功',
      tabBarVisible: true,
      // headerBackShow: true,
      permits: allStates
    }
  }]
}, {
  path: '/h5/messages',
  name: 'messages',
  redirect: { name: 'messageList' },
  component: {
    render(h) {
      return h('router-view')
    }
  },
  children: [{
    path: 'list',
    name: 'messageList',
    component: resolve => require(['@/views/account/Messages.vue'], resolve),
    meta: {
      title: '消息中心',
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: ':id',
    name: 'messageDetail',
    component: resolve => require(['@/views/account/Message.vue'], resolve),
    meta: {
      title: '消息通知',
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }]
}, {
  path: '/h5/mine',
  name: 'mineLayout',
  redirect: { name: 'mine' },
  component: {
    render(h) {
      return h('router-view')
    }
  },
  children: [{
    path: 'menu',
    name: 'mine',
    component: resolve => require(['@/views/account/Mine.vue'], resolve),
    meta: {
      title: '我的',
      tabBarVisible: true,
      permits: allStates
    }
  }]
}]
