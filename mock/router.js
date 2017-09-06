const commonApi = require('./api/common.js')
const router = require('express').Router()
const jwt = require('express-jwt')
const SECRET = require('./const.js').SECRET

router.use(jwt({
  secret: SECRET,
  credentialsRequired: true, // 是否需要token
  getToken(req) { // 获取token方式
    if (req.headers['x-auth-token']) {
      return req.headers['x-auth-token']
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  },
  isRevoked(req, payload, done) { // 判断token是否失效
    const isExpired = Date.now() / 1000 - payload.iat > 86400
    return done(null, isExpired)
  }
}).unless({ path: ['/api/captcha', '/api/auth/credentials'] }), (req, res, next) => {
  req.session.captcha = 123456
  res.jsonOk = function(data) {
    res.json({
      code: 0,
      message: 'success',
      data
    })
  }

  next()
})
commonApi(router)

// handle jwt err
router.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.json({
      code: 200003,
      message: '鉴权失败'
    })
  } else {
    next()
  }
})

module.exports = router
