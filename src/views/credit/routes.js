import { CUST_STATE_CODE_MAP } from '@/constants.js'
import { values } from 'lodash'
const allStates = values(CUST_STATE_CODE_MAP)

export default [{
  path: '/h5/credit',
  name: 'credit',
  redirect: { name: 'creditIndex' },
  component: {
    render(h) {
      return h('router-view')
    }
  },
  children: [{
    path: 'index',
    name: 'creditIndex',
    component: resolve => require(['@/views/credit/Index.vue'], resolve),
    meta: {
      title: '信用',
      tabBarVisible: true,
      headerHidden: true,
      // headerBackShow: true,
      // hasFixedButtons: false,
      permits: allStates
    }
  }, {
    path: 'credit_grade',
    name: 'creditGrade',
    component: resolve => require(['@/views/credit/CreditGrade.vue'], resolve),
    meta: {
      title: '信用等级及特权',
      tabBarVisible: true,
      headerBackShow: true,
      // headerHidden: true,
      // hasFixedButtons: false,
      permits: allStates
    }
  }]
}]
