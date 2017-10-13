const Mock = require('mockjs')
const SECRET = require('../const.js').SECRET
const jwt = require('jsonwebtoken')

module.exports = router => {
  // 获取验证码
  router.get('/captcha', (req, res) => {
    req.session.captcha = Math.random().toString().slice(2, 8)
    res.jsonOk({
      captcha: req.session.captcha
    })
  })

  // 登录
  router.post('/auth/credentials', (req, res) => {
    const data = req.body
    // console.log(data, req.session.captcha)
    if (Math.random() >= 0.7) {
      res.json({
        code: 200003 + parseInt(Math.random() * 2, 10),
        message: '用户被禁用或者状态异常'
      })
    } else if (req.session.captcha !== parseInt(data.captcha, 10)) {
      res.json({
        code: 200002,
        message: '验证码错误'
      })
    } else {
      res.jsonOk(Mock.mock({
        token: jwt.sign({ foo: 'bar' }, SECRET),
        user: {
          id: '@guid',
          phone: 13312312311,
          avatarUrl: '@image("200x100", "#4A7BF7", "Hello")',
          'isInvited|1': true,
          'isNew|1': true
        }
      }))
    }
  })

  // 登出
  router.get('/sign_out', (req, res) => {
    res.jsonOk({})
  })

  // 获取用户信息
  router.get('/users/self', (req, res) => {
    res.jsonOk(Mock.mock({
      'id': '599794a4f87ca703c05df02d',
      'phone': '13810000000',
      'name': 'demo',
      'nickname': '昵称', //optional 微信昵称
      'avatarURL': '',
      'isInvited': true, //是否为受邀客户
      'isNew': false, //是否为新客
      'productInfo': [{
        'id': '599794a4f87ca703c05df02e',
        'amount': 1000.00, //产品合同金额
        'loanDays': 14, //产品放款期限，天
        'serviceFee': 56.00, //服务费用
        'discountAmount': 16.00, //优惠费用
        'loanAmount': 1000.00 //实际放款金额，暂定服务费后收，现在等于合同金额
      }],
      'privilegeInfo': {
        'creditPoints': 1203, //当前积分
        'currentLevel': 1, //当前积分等级
        'nextLevelPoints': 100, //下一级所需积分
        'nextLevel': 2 //下一积分等级
      },
      'couponCount': 2, // 优惠券张数
      'systemMsgUnread': 10, //未读系统消息数
      'personalMsgUnread': 20, //未读个人消息数
      'currentOngoingContract': { //optional 当前正在进行的合同
        'id': '599794a4f87ca703c05df02e',
        'currentContractStatus': {
          'key': '1006',
          'value': '待还款'
        }
      }
    }))
  })

  // 验证旧手机号验证码
  router.post('/verify/old_phone', (req, res) => {
    const data = req.body
    if (req.session.captcha !== parseInt(data.captcha, 10)) {
      res.json({
        code: 200002,
        message: '验证码错误'
      })
    } else if (data.verifyType === '1' && !data.bankCardId) {
      res.json({
        code: 200007,
        message: '参数校验错误'
      })
    } else {
      res.jsonOk({})
    }
  })

  // 变更手机号
  router.post('/change/phone', (req, res) => {
    const data = req.body
    if (req.session.captcha !== parseInt(data.captcha, 10)) {
      res.json({
        code: 200002,
        message: '验证码错误'
      })
    } else if (data.verifyType === '1' && !data.bankCardId) {
      res.json({
        code: 200007,
        message: '参数校验错误'
      })
    } else {
      res.jsonOk({})
    }
  })
}
