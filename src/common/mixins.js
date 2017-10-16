import { pruneParams } from '@/common/helpers.js'
import { isWeixin } from '@/common/utils.js'
const routerCrumbs = []

export default {
  install(Vue, options) {
    return Vue.mixin({
      methods: {
        pruneParams,
        isWeixin,
        routerBack() { // 添加过渡动画在back的时候
          if (this.routerCrumbs.length) {
            const preRoute = this.routerCrumbs.pop()
            this.$router.push({
              name: preRoute.name,
              query: preRoute.query,
              params: {
                ...preRoute.params,
                notSaveCrumbed: true,
                transitionName: 'slideLeftFade'
              }
            })
          } else {
            this.$router.back()
          }
        }
      },

      computed: {
        routerCrumbs: {
          get() {
            return routerCrumbs
          }
        }
      }
    })
  }
}
