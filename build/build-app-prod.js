// https://github.com/shelljs/shelljs
require('./check-versions')()

process.env.NODE_ENV = 'app-production'

var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var shell = require('shelljs')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.app.conf')

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.posix.join(config.appProd.assetsRoot, config.appProd.assetsSubDirectory)
shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)
shell.config.silent = true
// shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  // 拷贝生成的app资源文件到www目录，供自动更新用
  shell.exec('npm run manifest')
  var appAssetsPath = path.posix.join(config.appProd.assetsRoot, '../..', 'hummingbird-h5-app/www')
  shell.rm('-rf', appAssetsPath)
  shell.mkdir('-p', appAssetsPath)
  shell.cp('-Rf', config.appProd.assetsRoot + '/*', appAssetsPath)
  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})
