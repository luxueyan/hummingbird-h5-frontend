import { pruneParams } from './helpers.js'

export default {
  install(Vue, options) {
    return Vue.mixin({
      methods: {
        pruneParams
      }
    })
  }
}
