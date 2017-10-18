var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"app-development"',
  API_HOST: '"http://fn.91zhengxin.com:9111/api"',
  APP_MANIFEST_HOST: '"http://localhost:8000/"'
})
