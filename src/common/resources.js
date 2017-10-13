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
export const login = resource('auth/credentials', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 登录
export const captcha = resource('captcha', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 验证码
export const validateOldPhone = resource('verify/old_phone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 验旧手机号
export const changePhone = resource('change/phone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 变更新手机号
export const updateInfoSendMsgFromPhone = resource('?method=updateInfoSendMsgFromPhone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 账户修改发送验证码
export const validateUpdateInfoMsgFromPhone = resource('?method=validateUpdateInfoMsgFromPhone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 账户修改验证验证码
export const updateBankInfo = resource('?method=updateBankInfo', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 更新银行卡信息
export const userSelf = resource('users/self', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 用户信息
export const getCustState = resource('?method=getCustState', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 用户业务状态
export const bankCardInfo = resource('bank_cards/info', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 获取开户银行
export const bankCards = resource('bank_cards{/id}', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 获取开户银行
export const bankCardDelete = resource('bank_cards/delete', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 获取开户银行
export const bankCardDefault = resource('bank_cards/default', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 获取开户银行
// export const SetAgreementMsg = resource('?method=SetAgreementMsg', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 完成合同信息填写
// export const SetAgreementSign = resource('?method=SetAgreementSign', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 完成合同签字
// export const QueryContractList = resource('?method=QueryContractList', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 查询我的合同信息列表
export const contractReturn = resource('contracts/return', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 再次生成合同
export const contractInitial = resource('contracts/initial', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 首次生成合同
export const contractLoan = resource('contracts/loan', {}, {}, { _showLoadingStatus: true, ...commonOpts }) //请求放款
export const selfContracts = resource('self/contracts{/id}', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 查询我的合同信息
export const contractReset = resource('self/contracts/reset', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 放弃合同信息
export const contractSign = resource('self/contracts/sign', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 签署合同
export const repayments = resource('repayments', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 提前还款
// export const PayContract = resource('?method=PayContract', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 请求放款
// export const GiveUpContract = resource('?method=GiveUpContract', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 取消合同
export const Messages = resource('?method=Messages', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 取消合同
export const repaymentError = resource('repayment_error', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 还款失败具体错误信息
