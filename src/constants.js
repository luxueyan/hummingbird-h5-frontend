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
  BANK_CARD_NOT_SUPPORTED: 200009, // 银行卡不支持
  BANK_CARD_CANNOT_DELETE: 200010, // 无法解绑唯一的卡片
  CANNOT_BORROW: 200011, // 很抱歉，目前您无法使用借款服务！
  INVITED_OVERDUE: 200012, // 很抱歉，由于您的邀请已过期，目前无法使用借款服务！我们会不定期发出邀请，敬请期待！
  NOT_INVITED: 200013, // 很抱歉，由于您为非邀请用户，暂时无法使用该服务。我们会不定期发出邀请，敬请期待！
  CONTRACT_LOANING: 200014, // 该合同放款处理中,暂时不可取消
  REPAY_REPEAT_SUBMIT: 200015, // 重复提交
  ACTIVE_REPAY_CANNOT_CONFIRM: 200016 // 该合同不符合主动还款条件或还款处理中
}

// 用户状态和合同状态合并后的类型映射
export const CUST_STATE_CODE_MAP = {
  // NOT_LOGIN: '1001', // 未登录
  DEBT_SETTELED: '1002', // 借款结清
  // NOT_INVITED: '1003', // 未邀请
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
