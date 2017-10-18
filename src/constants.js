export const STORE_KEY_USER = 'user'
export const STORE_KEY_ACCESS_TOKEN = 'user.access_token'
export const STORE_KEY_LAST_LOGINED_PHONE = 'phone'

// ajax 返回的code类型
export const RET_CODE_MAP = {
  OK: 0, // 成功,
  DATA_EXSITED: 200001, // 信息已存在,
  CAPTCHA_INVALID: 200002, // 验证码错误
  AUTH_FAILED: 200003, // 鉴权失败
  USER_FORBIDDENED: 200004, // 用户已被禁用
  USER_EXCEPTIONAL: 200005, // 用户状态异常
  DATA_NOT_EXSITED: 200006, // 信息不存在
  PARAMS_INVALID: 200007, // 参数校验失败
  CONTRACT_EXSITED: 200008, // 存在进行中的合同
  BANK_CARD_NOT_SUPPORTED: 200009 // 银行卡不支持
}

// 用户状态和合同状态合并后的类型映射
export const CUST_STATE_CODE_MAP = {
  // NOT_LOGIN: '1001', // 未登录
  DEBT_SETTELED: '1002', // 借款结清
  NOT_INVITED: '1003', // 未邀请
  LOANING: '1004', // 放款中
  LOAN_FAILED: '1005', // 放款失败
  DEBT_NOT_SETTLED: '1006', // 借款未结清
  REPAYING: '1007', // 还款中
  REPAY_FAILED: '1008', // 还款失败
  // BLACKLIST: '1009', // 黑名单客户
  FIRST_BORROWER: '1010', // 首次借款
  CONTRACT_INFO_FILLED: '1011', // 合同信息完成，带签署
  UNKNOWN: '1111' // 未知状态
}

// 验证码发送类型
export const CAPTCHA_SEND_TYPE = {
  USER_LOGIN: 'userLogin', // 用户登录获取验证码
  CHANGE_BANK_RESERVE_PHONE: 'mendBank', // 银行卡变更预留手机号获取验证码
  CHANGE_USER_PHONE: 'mendPhone', // 变更用户登录用手机号
  ADD_BANK_RESERVE_PHONE: 'addBank' // 添加银行预留手机号
}
