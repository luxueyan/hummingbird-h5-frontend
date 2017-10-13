import { pruneParams } from '@/common/helpers.js'
import { isWeixin } from '@/common/utils.js'

export default {
  install(Vue, options) {
    return Vue.mixin({
      methods: {
        pruneParams,
        isWeixin
      }
    })
  }
}
