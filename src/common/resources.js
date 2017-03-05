import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const previousRequestMap = {}
const commonOpts = {
  emulateJSON: true,
  before(request) {
    const key = Vue.url(request.url, request.params)
    if (previousRequestMap[key]) {
      previousRequestMap[key].abort()
    }

    previousRequestMap[key] = request
  }
}

const resource = Vue.resource
const loginByPhone = resource('?method=loginByPhone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 登录
const sendMsgFromPhone = resource('?method=sendMsgFromPhone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 验证码
const queryMyAccount = resource('?method=queryMyAccount', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 用户信息
const getCustState = resource('?method=getCustState', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 用户业务状态
const isDetectionBankCard = resource('?method=isDetectionBankCard', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 获取开户银行
const SetAgreementMsg = resource('?method=SetAgreementMsg', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 完成合同信息填写
const QueryContractList = resource('?method=QueryContractList', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 查询我的合同信息列表
const QueryContract = resource('?method=QueryContract', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 查询我的合同信息

export {
  loginByPhone,
  sendMsgFromPhone,
  queryMyAccount,
  getCustState,
  isDetectionBankCard,
  SetAgreementMsg,
  QueryContractList,
  QueryContract
}
