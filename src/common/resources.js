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
export const login = resource('auth/credentials/client', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 登录
export const wxOpenID = resource('wx/open_id', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 提交用户获取openid的code
export const captcha = resource('captcha', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 验证码
export const validateOldPhone = resource('verify/old_phone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 验旧手机号
export const changePhone = resource('change/phone', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 变更新手机号
export const userSelf = resource('users/self', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 用户信息
export const bankCardInfo = resource('bank_cards/info', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 获取开户银行
export const bankCards = resource('bank_cards{/id}', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 银行卡列表和详情
export const bankCardDelete = resource('bank_cards/unbind', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 删除银行卡
export const bankCardDefault = resource('bank_cards/default', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 设置默认银行卡
export const contractReturn = resource('contracts/return', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 再次生成合同
export const contractInitial = resource('contracts/initial', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 首次生成合同
export const contractLoan = resource('contracts/loan', {}, {}, { _showLoadingStatus: true, ...commonOpts }) //请求放款
export const selfContracts = resource('self/contracts{/id}', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 查询我的合同信息
export const contractReset = resource('self/contracts/reset', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 放弃合同信息
export const contractSign = resource('self/contracts/sign', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 签署合同
export const repayments = resource('repayments', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 提前还款
export const repaymentError = resource('repayment_error', {}, {}, { _showLoadingStatus: true, ...commonOpts }) // 还款失败具体错误信息
