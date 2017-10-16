<template lang="pug">
.app
  fb-updater-process
  n-progress(parent=".app")
  mt-header(ref="header", fixed="", :title="headerTitle", v-show="headerShow")
    mt-button(v-if="headerBackShow", icon="back", slot="left", @click="routerBack()")
    mt-button.of-v(v-if="btnVisible(['mine'])", slot="left", @click="$router.push({name: 'messageList'})")
      i.iconfont.icon-xiaoxi-solid.ft18.pos-r
        span.badge-red.badge-top 10
    mt-button(slot="right", v-if="btnVisible(['signature'])")
      small
        router-link(:to="{name:'loanAgreement', params:{'transitionName': 'slideRightFade'}}") 查看
    mt-button(slot="right", v-if="btnVisible(['messageList'])")
      small
        a(@click="emitEvent('messages-mark-read')") 全部已读
  .container(:class="{'header-show': headerShow, 'has-fixed-buttons': hasFixedButtons}", ref="container")
    transition(:name="transitionName", appear, mode="out-in")
      router-view
  mt-tabbar(v-model="tabSelected", :fixed="true", v-show="tabBarVisible", ref="tabbar")
    mt-tab-item#borrowerInfo(:class="{'is-selected': tabIsSelected(['borrowerInfo', 'loaning', 'signature', 'loanFailed', 'repayFailed', 'repayInfo', 'repaying'])}")
      div(slot="icon")
        i.iconfont.icon-jiekuanxiangguan.active-default
        i.iconfont.icon-jiekuanxiangguan-select.active-onselect
      | 借款
    mt-tab-item#repayInfo(:class="{'is-selected': tabIsSelected(['repayInfo', 'repaying', 'repayFailed'])}")
      div(slot="icon")
        i.iconfont.icon-renzheng.active-default
        i.iconfont.icon-renzheng-select.active-onselect
      | 认证
    mt-tab-item#mine(:class="{'is-selected': tabIsSelected(['mine', 'changeBankCardStep1', 'changeBankCardStep2', 'changeBankCardStep3', 'messageList', 'messageDetail'])}")
      div(slot="icon")
        i.iconfont.icon-wode.active-default
        i.iconfont.icon-wode-select.active-onselect
      | 我的
</template>

<script>
import NProgress from '@/components/NProgress.vue'
import FbUpdaterProcess from '@/components/FbUpdaterProgress.vue'

import {
  headerRightButton,
  titleUpdater
} from '@/common/crossers.js'
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
    FbUpdaterProcess
  },

  mounted() {
    each(this.$refs.tabbar.$children, v => {
      v.$el.addEventListener('touchstart', e => {
        this.tabClick(e, v.id)
      })
    })

    titleUpdater.$on('updatetitle', title => {
      this.title = title
    })
  },

  methods: {
    ...mapActions(['getUser']),

    // 按钮在哪一页可见
    btnVisible(routes = []) {
      return includes(routes, this.$route.name)
    },

    // tab点击事件
    tabClick(event, tab) {
      this.$router.push({
        name: tab
      })
    },

    // 菜单是否被选中
    tabIsSelected(routeNames) {
      return includes(routeNames, this.$route.name)
    },

    // 菜单是否禁用
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
    $route(to, from) {
      this.transitionName = to.params.transitionName || 'fade'
      this.updateContainerHeight(to, from)
      if (from.fullPath !== '/' && !to.params.notSaveCrumbed) {
        this.routerCrumbs.push(from)
      }
      // console.log(to.params, from, this.routerCrumbs)
      // this.mineMenuVisible = false
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
      return this.$route.meta.headerBackShow && this.routerCrumbs.length
    },
    headerTitle() {
      return this.title || this.$route.meta.title
      // return this.$store.state.route.meta.title
    }
  },

  data() {
    return {
      // preRoute: null,
      title: '',
      tabSelected: '',
      transitionName: 'slideRightFade'
      // mineMenuVisible: false
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';
// @import '~assets/fonts/iconfont/iconfont.css';
@import url('//at.alicdn.com/t/font_368105_ifbm6isz0r0h33di.css');
@import '~assets/scss/base.scss';
@import '~assets/scss/common.scss';
@import '~assets/scss/transition.scss';
@import '~assets/scss/badge.scss';
@import '~assets/scss/flex.scss';
@import '~assets/scss/form.scss';
@import '~assets/scss/mint-ui.scss';
html {
  height: 100%;
}

body {
  font-family: -apple-system;
  font-family: '-apple-system', "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  background-color: #f8f9fb;
  min-height: 100%;
  color: #353535;
  font-size: 16px; // font-weight: 300;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

#nprogress .spinner {
  display: none!important;
}

small {
  color: $gray-color;
}

.icon-warning,
.icon-ku {
  color: #f76249;
}

// .icon-arrow-bottom-right {
//   display: inline-block;
//   border-width: 5px;
//   border-color: transparent currentColor currentColor transparent;
//   border-style: solid;
// }
.logo {
  text-align: center; // background: white;
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
