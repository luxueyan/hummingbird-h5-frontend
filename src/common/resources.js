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
const updateInfoSendMsgFromPhone = resource('?method=updateInfoSendMsgFromPhone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 账户修改发送验证码
const validateUpdateInfoMsgFromPhone = resource('?method=validateUpdateInfoMsgFromPhone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 账户修改验证验证码
const updateBankInfo = resource('?method=updateBankInfo', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 更新银行卡信息
const queryMyAccount = resource('?method=queryMyAccount', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 用户信息
const getCustState = resource('?method=getCustState', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 用户业务状态
const isDetectionBankCard = resource('?method=isDetectionBankCard', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 获取开户银行
const SetAgreementMsg = resource('?method=SetAgreementMsg', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 完成合同信息填写
const SetAgreementSign = resource('?method=SetAgreementSign', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 完成合同签字
const QueryContractList = resource('?method=QueryContractList', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 查询我的合同信息列表
const QueryContract = resource('?method=QueryContract', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 查询我的合同信息
const CustRepayment = resource('?method=CustRepayment', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 提前还款
const PayContract = resource('?method=PayContract', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 请求放款
const GiveUpContract = resource('?method=GiveUpContract', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 取消合同

export {
  loginByPhone,
  sendMsgFromPhone,
  updateInfoSendMsgFromPhone,
  validateUpdateInfoMsgFromPhone,
  updateBankInfo,
  queryMyAccount,
  getCustState,
  isDetectionBankCard,
  SetAgreementMsg,
  SetAgreementSign,
  QueryContractList,
  QueryContract,
  CustRepayment,
  PayContract,
  GiveUpContract
}
