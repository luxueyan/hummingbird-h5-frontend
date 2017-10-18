<template lang="pug">
section
  div.logo
    img(src='~assets/images/logo.jpg')
    small 免审核借款1000元
  form.login-form(@submit.prevent='submit()')
    .fields
      mt-field(label='', placeholder='请输入手机号', v-model='user.phone', :state="getFieldState('user.phone')", @click.native="showFieldError($event, 'user.phone')")
      mt-field(label='', placeholder='请输入验证码', v-model='user.captcha', :state="getFieldState('user.captcha')", @click.native="showFieldError($event, 'user.captcha')")
        mt-button(type='default', @click.stop.prevent='toGetMsgCode()', :disabled='countdownVisible')
          span(v-show='!countdownVisible') 发送验证码
          fb-countdown(ref='fnCountdown', v-show='countdownVisible', @countdown-over='onCountdownOver()')
    .form-buttons
        mt-button.mint-button-block(type='primary', size='large') 登录
</template>

<script>
import ValidatorMixin from '@/views/validator_mixin.js'
import CommonMixin from '@/views/common_mixin.js'
import {
  RET_CODE_MAP,
  STORE_KEY_LAST_LOGINED_PHONE
} from '@/constants.js'
import {
  mapActions
} from 'vuex'
import { read } from '@/storage'
import store from '@/store'

export default {
  mixins: [CommonMixin, ValidatorMixin],
  validators: {
    'user.phone' (value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号')
    },
    'user.captcha' (value) {
      return this.validate(value).required('请输入验证码').digit('请正确输入验证码').length(6, '请正确输入验证码')
    }
  },

  async beforeRouteEnter(to, from, next) {
    if (to.query.accesstoken) {
      (to.query.accesstoken)
      store.dispatch('updateToken', to.query.accesstoken)
      await store.dispatch('getUser')
      next({
        name: to.query.to || 'authorizedTip'
      })
    } else {
      next()
    }
  },

  mounted() {
    this.redirect = decodeURIComponent(this.$route.query.redirect || '')
    // this.$route.query.openid && (this.user.openid = this.$route.query.openid) // eslint-disable-line
    this.$route.query.loginType && (this.user.loginType = this.$route.query.loginType) // eslint-disable-line
    this.user.phone = this.$store.getters.user.phone || read(STORE_KEY_LAST_LOGINED_PHONE) || ''
  },

  methods: {
    ...mapActions(['login', 'getUser', 'updateToken']),
    async submit() {
      const success = await this.$validate()
      if (success) {
        const data = await this.login(this.user)
        if (data.code === RET_CODE_MAP.OK) {
          if (this.user.loginType === 2 && !data.data.user.openId) {
            // 取得当前地址用于回跳，目前直接使用字符串拼接的方式，是因为web下router用的是history模式，所以如果以后换成hash这里要注意兼容问题
            const selfLocation = location.href.replace(/(https?:\/\/[^/]+)\/?.*/, '$1') + this.redirect

            // 跳转微信授权获取code
            location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.WX_APPID}&redirect_uri=${encodeURIComponent(selfLocation)}&response_type=code&scope=snsapi_base&#wechat_redirect`
          } else {
            this.$router.push({
              path: this.redirect || '/'
            })
          }
        }
      } else {
        this.$toast(this.validation.firstError(), 'error')
      }
    }
  },

  data() {
    const NODE_ENV = process.env.NODE_ENV
    return {
      redirect: null, //登录后跳转页面
      // countdownVisible: false,
      user: {
        phone: '',
        captcha: '',
        loginType: this.isWeixin() ? 2 : (~NODE_ENV.indexOf('app') ? 1 : 0)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  background: white;
}
</style>
