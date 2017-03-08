<template lang="pug">
.app
  n-progress(parent=".app")
  mt-header(fixed="", :title="headerTitle", v-show="headerShow")
    mt-button(v-show='headerBackShow', icon='back', slot='left', @click='back()')
  .container(:class="{'header-show': headerShow}")
    router-view
</template>

<script>
import NProgress from './components/NProgress.vue'
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  components: {
    NProgress
  },

  methods: {
    ...mapActions(['getUser']),
    back() {
      this.$router.back()
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
}

.dn,
[v-cloak] {
  display: none;
}
</style>
