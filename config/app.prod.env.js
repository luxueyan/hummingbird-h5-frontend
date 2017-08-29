var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"app-production"',
  APP_MANIFEST_HOST: '"http://fn.91zhengxin.com:9111/"'
})
