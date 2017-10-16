import { CUST_STATE_CODE_MAP } from '@/constants.js'
import { values } from 'lodash'
const allStates = values(CUST_STATE_CODE_MAP)

export default [{
  path: '/h5/bank',
  name: 'banks',
  redirect: { name: 'bankList' },
  component: {
    render(h) {
      return h('router-view')
    }
  },
  children: [{
    path: 'list',
    name: 'bankList',
    component: resolve => require(['@/views/bank/List.vue'], resolve),
    meta: {
      title: '银行卡列表',
      tabBarVisible: true,
      headerBackShow: true,
      // headerHidden: true,
      hasFixedButtons: false,
      permits: allStates
    }
  }, {
    path: ':id',
    name: 'bankDetail',
    component: resolve => require(['@/views/bank/Detail.vue'], resolve),
    meta: {
      title: '银行卡详情',
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: 'add_bank/step1',
    name: 'addBankStep1',
    component: resolve => require(['@/views/bank/AddBankStep1.vue'], resolve),
    meta: {
      title: '添加银行卡',
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: 'add_bank/step2',
    name: 'addBankStep2',
    component: resolve => require(['@/views/bank/AddBankStep2.vue'], resolve),
    meta: {
      title: '添加银行卡',
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: 'add_bank/step3',
    name: 'addBankStep3',
    component: resolve => require(['@/views/bank/AddBankStep3.vue'], resolve),
    meta: {
      title: '银行卡信息',
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: 'change_phone/step1',
    name: 'changeBankPhoneStep1',
    component: resolve => require(['@/views/account/ChangePhoneStep1.vue'], resolve),
    meta: {
      title: '修改预留手机号',
      verifyType: 1,
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }, {
    path: 'change_phone/step2',
    name: 'changeBankPhoneStep2',
    component: resolve => require(['@/views/account/ChangePhoneStep2.vue'], resolve),
    meta: {
      title: '修改预留手机号',
      verifyType: 1,
      tabBarVisible: true,
      headerBackShow: true,
      permits: allStates
    }
  }]
}]