// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import { sync } from 'vuex-router-sync'
import router from '@/router'
import '@/common/resources.js'
import interceptors from '@/common/interceptors.js'
import FbFilters from '@/common/filters.js'
import FbMixins from '@/common/mixins.js'
import FbDirectives from '@/common/directives.js'
import SimpleVueValidation from 'simple-vue-validator'
import { getReadTime } from '@/common/utils.js'

import {
  Cell,
  CellSwipe,
  Field,
  Header,
  Button,
  Toast,
  MessageBox,
  Indicator,
  Progress,
  Tabbar,
  TabItem,
  Spinner,
  InfiniteScroll
} from 'mint-ui'

Vue.component(Cell.name, Cell)
Vue.component(CellSwipe.name, CellSwipe)
Vue.component(Field.name, Field)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Progress.name, Progress)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Spinner.name, Spinner)
Vue.use(InfiniteScroll)

// 提示框icon样式
const ToastClasses = {
  'success': 'iconfont icon-chenggong',
  'error': 'iconfont icon-warning',
  'warn': 'iconfont icon-warn'
}

sync(store, router)

Vue.use(FbFilters)
Vue.use(FbMixins)
Vue.use(FbDirectives)

// 表单验证
Vue.use(SimpleVueValidation, {
  templates: {
    error: '错误',
    required: '必填项',
    float: '必须是小数',
    integer: '必须是整数',
    number: '必须是数值',
    lessThan: '必须小于{0}',
    lessThanOrEqualTo: '必须小于等于{0}',
    greaterThan: '必须大于{0}',
    greaterThanOrEqualTo: '必须大于等于{0}',
    between: '必须在{0}到{1}之间',
    size: '尺寸小于{0}',
    length: '长度小于{0}',
    minLength: '最小长度{0}',
    maxLength: '最大长度{0}',
    lengthBetween: '长度在{0}和{1}之间',
    /* beautify ignore:start */
    in: '必须是{0}',
    /* beautify ignore:end */
    notIn: '不能是{0}',
    match: '不匹配',
    regex: '错误的格式',
    digit: '必须是数字',
    email: '邮箱格式错误',
    url: 'url格式错误',
    optionCombiner: function(options) {
      if (options.length > 2) {
        options = [options.slice(0, options.length - 1).join(', '), options[options.length - 1]]
      }
      return options.join('或')
    }
  }
})

Vue.http.options.root = process.env.API_HOST || '/api'
// Vue.http.headers.common['Authorization'] = window.localStorage.token || ''

// 拦截器统一注入
interceptors.forEach((v) => {
  Vue.http.interceptors.push(v)
})

// 激活ios设备上面css的active效果
document.body.addEventListener('touchstart', () => {})

// 避免bfcache导致的问题
window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload()
  }
}

function main() {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
}

Vue.$msgBox = Vue.prototype.$msgBox = MessageBox
Vue.$toast = Vue.prototype.$toast = function toast(msg = '', type = '') {
  Toast({
    message: msg,
    duration: getReadTime(msg),
    iconClass: type ? ToastClasses[type] : ''
  })
}
Vue.$indicator = Vue.prototype.$indicator = Indicator
Vue.prototype.isWeixin = () => { // 判断是否是微信
  const ua = navigator.userAgent.toLowerCase()
  if (ua.match(/.*MicroMessenger/i)) {
    return true
  }
  return false
}

// 启动应用
if (process.env.NODE_ENV.indexOf('app') > -1) {
  document.addEventListener('deviceready', e => {
    main()
    const AppUpdater = require('@/app.updater.js').default
    new AppUpdater({
      root: process.env.APP_MANIFEST_HOST
    })
  })
} else {
  main()
}
