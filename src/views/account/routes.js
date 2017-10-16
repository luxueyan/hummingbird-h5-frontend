import { CUST_STATE_CODE_MAP } from '@/constants.js'
import { values } from 'lodash'
const allStates = values(CUST_STATE_CODE_MAP)

export default [{
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
