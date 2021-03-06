import Vue from 'vue'
import { includes, isObject, keys } from 'lodash'
import { MessageBox, Indicator } from 'mint-ui'
import store from '@/store'
import { read, save } from '@/storage'
import { RET_CODE_MAP } from '@/constants.js'
import moment from 'moment'
import msgBox from '@/common/custom_msgbox.js'

// 不同的状态不同的标题
const retCodeTitleMap = {
  [RET_CODE_MAP.CANNOT_BORROW]: '无法借款',
  [RET_CODE_MAP.INVITED_OVERDUE]: '邀请失效',
  [RET_CODE_MAP.NOT_INVITED]: '无法使用'
}

const CACHE_URLS = [] // 需要缓存的接口
const requestMap = {} // 请求地址
let indicatorHandle = 0

export default [
  // 请求超时
  function(request, next) {
    let timeout
    if (request._timeout) { // 超时自定义
      timeout = setTimeout(() => {
        if (request.onTimeout) request.onTimeout(request)
        request.abort()
      }, request._timeout)
    }
    if (request._showLoadingStatus) { // 是否显示loading状态
      Indicator.open()
      clearTimeout(indicatorHandle)
    }

    next(res => {
      clearTimeout(timeout)
      indicatorHandle = setTimeout(() => {
        Indicator.close()
      }, 300)
    })
  },
  // 控制重复请求
  function(request, next) {
    let key
    // abort the same post request
    if (/POST|PUT|DELETE/.test(request.method)) {
      key = `${request.method}${request.url}${JSON.stringify(request.body)}`
      // abort the existed request
      if (key && requestMap[key]) {
        key = null
        setTimeout(() => {
          request.abort()
        })
      } else {
        requestMap[key] = request
      }
    }

    request.headers.set('x-auth-token', store.getters.token)

    next((response) => {
      // delete current request in the map
      if (key) {
        delete requestMap[key]
      }
    })
  },
  // 缓存接口
  function(request, next) {
    let key = Vue.url(request.url, request.params)
    request.cache = includes(CACHE_URLS, key.split('?')[0])

    if (!request.params.no_cache && read(key)) {
      next({
        status: 200,
        ok: true,
        headers: {},
        statusText: 'OK',
        data: read(key) || '{}',
        body: read(key) || '{}',
        json() {
          return JSON.parse(read(key) || '{}')
        }
      })
    } else {
      next()
    }
  },
  // 状态码
  function(request, next) {
    next((res) => {
      store.commit('updateNow', moment(res.headers.get('Date')).toDate())
      if (res.status === 419 || res.status === 401) {
        if (request.params.skipAuth) {
          store.dispatch('logout', true)
        } else {
          MessageBox('提示', res.body.message || '无访问权限！')
          store.dispatch('logout')
        }
      } else if (res.status === 400) {
        MessageBox('提示', res.body.message || '请求失败！')
      } else if (res.status === 403) {
        MessageBox('提示', res.body.message || '您无此权限！')
      } else if (res.status === 404) {
        MessageBox('提示', res.body.message || '访问错误！')
      } else if (res.status === 500 || res.status === 502) {
        MessageBox('提示', res.body.message || '抱歉！服务器忙。')
      } else if (res.status === 200) {
        if (!request.notApi && !request.params.skipAuth && (!res.body || res.body.code !== RET_CODE_MAP.OK)) {
          if (includes(keys(retCodeTitleMap), res.body.code + '')) {
            msgBox({
              title: retCodeTitleMap[res.body.code] || '提示',
              message: res.body.message || '请求失败！'
            })
          } else {
            MessageBox('提示', res.body ? res.body.message : '登录失败或者访问无权限')
          }
        } else {
          if (request.cache) { // 缓存需要缓存的接口
            let key = Vue.url(request.url, request.params)
            let body = isObject(res.body) ? JSON.stringify(res.body) : res.body
            save(key, body)
          }
        }
      }
    })
  }
]
