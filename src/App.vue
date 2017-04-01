<template lang="pug">
.app
  n-progress(parent=".app")
  mt-header(fixed="", :title="headerTitle", v-show="headerShow")
    mt-button(v-show='headerBackShow', icon='back', slot='left', @click='back()')
    mt-button(slot='right', v-show="rightCheckLoadAgreementVisible(['signature'])")
      small
        router-link(:to="{name:'loanAgreement'}") 查看
  .container(:class="{'header-show': headerShow, 'has-fixed-buttons': hasFixedButtons}")
    router-view
</template>

<script>
import NProgress from './components/NProgress.vue'
import {
  mapGetters,
  mapActions
} from 'vuex'
import {
  includes
} from 'lodash'

export default {
  components: {
    NProgress
  },

  methods: {
    ...mapActions(['getUser']),
    back() {
      this.$router.back()
    },
    // 查看借款服务协议按钮在哪一页可见
    rightCheckLoadAgreementVisible(routes = []) {
      return includes(routes, this.$route.name)
    }
  },

  mounted() {
    // 保证每次刷新页面时候更新一下用户信息
    this.getUser({
      skipAuth: true
    })
  },

  computed: {
    ...mapGetters['route'],
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
}

#nprogress .spinner {
  display: none!important;
}

small {
  color: #888;
}

.ui-icon-warn {
  color: #f76249;
}

.logo {
  text-align: center;
  // background: white;
  padding: 10px;
  img {
    max-width: 50%;
  }
  small {
    display: block;
  }
}

.container {
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
