<template lang="pug">
.app
  fb-updater-process
  n-progress(parent=".app")
  mt-header(ref="header", fixed="", :title="headerTitle", v-show="headerShow")
    mt-button(v-show='headerBackShow', icon='back', slot='left', @click='back()')
    mt-button(slot="right", v-if="rightButtonVisible(['signature'])")
      small
        router-link(:to="{name:'loanAgreement'}") 查看
    mt-button(slot="right", v-if="rightButtonVisible(['messageList'])")
      small
        a(@click="emitEvent('messages-mark-read')") 全部已读
  .container(:class="{'header-show': headerShow, 'has-fixed-buttons': hasFixedButtons}", ref="container")
    router-view
  mt-tabbar(v-model="tabSelected", :fixed="true", v-show="tabBarVisible", ref="tabbar")
    mt-tab-item#borrowerInfo(:class="{'is-selected': tabIsSelected(['borrowerInfo', 'loaning', 'signature', 'loanFailed']), 'is-disabled': tabIsDisabled('borrowerInfo')}")
      icon-repay(slot="icon")
      | 借款
    mt-tab-item#repayInfo(:class="{'is-selected': tabIsSelected(['repayInfo', 'repaying', 'repayFailed']), 'is-disabled': tabIsDisabled('repayInfo')}")
      icon-borrow(slot="icon")
      | 还款
    mt-tab-item#mine(:class="{'is-selected': tabIsSelected(['changeBankCardStep1', 'changeBankCardStep2', 'changeBankCardStep3', 'messageList', 'messageDetail'])}")
      icon-mine(slot="icon")
      div
        | 我的
        i.icon-arrow-bottom-right
        .mint-tab-item-menu(v-show="mineMenuVisible", ref="mineMenu")
          router-link(:to="{name: 'changeBankCardStep1'}", :class="{'is-selected': tabIsSelected(['changeBankCardStep1', 'changeBankCardStep2', 'changeBankCardStep3'])}") 修改信息
          router-link(:to="{name: 'messageList'}", :class="{'is-selected': tabIsSelected(['messageList', 'messageDetail'])}") 消息中心
</template>

<script>
import NProgress from './components/NProgress.vue'
import FbUpdaterProcess from './components/FbUpdaterProgress.vue'
import IconRepay from './components/icons/Repay.vue'
import IconBorrow from './components/icons/Borrow.vue'
import IconMine from './components/icons/Mine.vue'

import {
  headerRightButton
} from './common/crossers.js'
import {
  mapGetters,
  mapActions
} from 'vuex'
import {
  includes,
  each
} from 'lodash'

export default {
  components: {
    NProgress,
    FbUpdaterProcess,
    IconRepay,
    IconBorrow,
    IconMine
  },

  mounted() {
    each(this.$refs.tabbar.$children, v => {
      v.$el.addEventListener('touchstart', e => {
        this.tabClick(e, v.id)
      })
    })
  },

  methods: {
    ...mapActions(['getUser']),
    back() {
      this.$router.back()
    },
    // 按钮在哪一页可见
    rightButtonVisible(routes = []) {
      return includes(routes, this.$route.name)
    },

    tabClick(event, tab) {
      if (tab === 'mine') {
        if (!event.target !== this.$refs.mineMenu && !this.$refs.mineMenu.contains(event.target)) {
          this.mineMenuVisible = !this.mineMenuVisible
        }
      } else {
        if (this.isPermit(tab)) {
          this.$router.push({
            name: tab
          })
        } else {
          this.$toast('当前状态不能访问此页面！')
        }
      }
      event.preventDefault()
      event.stopPropagation()
    },

    tabIsSelected(routeNames) {
      return includes(routeNames, this.$route.name)
    },

    tabIsDisabled(routeName) {
      return !includes(this.getPermits(routeName), this.stateCode)
    },

    // 右侧按钮触发事件
    emitEvent(evName) {
      headerRightButton.$emit(evName)
    },

    // 设置container高度
    updateContainerHeight(route) {
      let tabBarHeight = 0
      let headerHeight = 0
      this.$nextTick(() => {
        if (this.tabBarVisible) {
          tabBarHeight = this.$refs.tabbar.$el.getBoundingClientRect().height
        }

        if (this.headerShow) {
          headerHeight = this.$refs.header.$el.getBoundingClientRect().height
        }

        this.$refs.container.style.height = `${window.innerHeight - tabBarHeight - headerHeight}px`
      })
    }
  },

  watch: {
    $route(route) {
      this.updateContainerHeight(route)
      this.mineMenuVisible = false
    }
  },

  computed: {
    ...mapGetters(['route', 'stateCode']),
    tabBarVisible() {
      return this.$route.meta.tabBarVisible && (~process.env.NODE_ENV.indexOf('app') || ~process.env.NODE_ENV.indexOf('development'))
    },
    headerShow() {
      return !this.$route.meta.headerHidden
    },
    hasFixedButtons() {
      return this.$route.meta.hasFixedButtons
    },
    headerBackShow() {
      return this.$route.meta.headerBackShow
    },
    headerTitle() {
      return this.$route.meta.title
        // return this.$store.state.route.meta.title
    }
  },

  data() {
    return {
      tabSelected: '',
      mineMenuVisible: false
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/_variables.scss';
@import './assets/fonts/iconfont/iconfont.css';
@import './assets/scss/base.scss';
@import './assets/scss/common.scss';
@import './assets/scss/form.scss';
@import './assets/scss/mint-ui.scss';
html {
  height: 100%;
}

body {
  font-family: -apple-system;
  font-family: '-apple-system', "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  background-color: #f8f9fb;
  min-height: 100%;
  color: #353535;
  font-size: 16px;
  // font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

#nprogress .spinner {
  display: none!important;
}

small {
  color: $gray-color;
}

.ui-icon-warn {
  color: #f76249;
}

.icon-arrow-bottom-right {
  display: inline-block;
  border-width: 5px;
  border-color: transparent currentColor currentColor transparent;
  border-style: solid;
}

.logo {
  text-align: center;
  // background: white;
  padding: 10px;
  img {
    max-width: 50%;
    max-width: 30vh;
  }
  small {
    display: block;
  }
}

.container {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  &.header-show {
    padding-top: $header-height;
  }
  &.has-fixed-buttons {
    padding-bottom: 80px;
  }
}

.dn,
[v-cloak] {
  display: none;
}
</style>
