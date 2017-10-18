var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WX_APPID: '"wx520c15f417810387"',
  API_HOST: '"/api"'
})
