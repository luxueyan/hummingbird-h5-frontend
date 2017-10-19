var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WX_APPID: '"wx05a218ccf353acb5"',
  API_HOST: '"/api"'
})
