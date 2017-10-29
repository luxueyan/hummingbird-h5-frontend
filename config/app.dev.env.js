var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"app-development"',
  API_HOST: '"http://core-test.fnsudai.com"',
  APP_MANIFEST_HOST: '"http://localhost:8000/"'
})
