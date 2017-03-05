// user info
export const STORE_KEY_USER = 'user'
export const STORE_KEY_ACCESS_TOKEN = 'user.access_token'
export const RET_CODE_MAP = { // ajax api ret code
  OK: '10000', // 成功,
  FAILED: '10001' // 失败
}

// cust state code
export const CUST_STATE_CODE_MAP = {
  NOT_LOGIN: '1001', // 未登录
  DEBT_SETTELED: '1002', // 借款结清
  NOT_INVITED: '1003', // 未邀请
  LOANING: '1004', // 放款中
  LOAN_FAILED: '1005', // 放款失败
  DEBT_NOT_SETTLED: '1006', // 借款未结清
  REPAYING: '1007', // 还款中
  REPAY_FAILED: '1008', // 还款失败
  BLACKLIST: '1009', // 黑名单客户
  FIRST_BORROWER: '1010', // 首次借款
  CONTRACT_INFO_FILLED: '1011', // 合同信息完成，带签署
  UNKNOWN: '1111' // 未知状态
}
