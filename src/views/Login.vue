<template lang="pug">
section
  div.logo
    img(src='../assets/images/logo.jpg')
    small 免审核借款1000元
  form.login-form(@submit.prevent='submit()')
    .fields
      mt-field(label='', placeholder='请输入手机号', v-model='user.phone', :state="getFieldState('user.phone')", @click.native="showFieldError($event, 'user.phone')")
      mt-field(label='', placeholder='请输入验证码', v-model='user.code', :state="getFieldState('user.code')", @click.native="showFieldError($event, 'user.code')")
        mt-button(type='default', @click.stop.prevent='toGetMsgCode()', :disabled='countdownVisible')
          span(v-show='!countdownVisible') 发送验证码
          fb-countdown(ref='fnCountdown', v-show='countdownVisible', @countdown-over='onCountdownOver()')
    .form-buttons
        mt-button.mint-button-block(type='primary', size='large') 登录
</template>

<script>
import FbCountdown from '../components/FbCountdown.vue'
import ValidatorMixin from './validator_mixin.js'
import {
  RET_CODE_MAP
} from '../constants.js'
import {
  mapActions
} from 'vuex'
import store from '../store'

export default {
  components: {
    FbCountdown
  },
  mixins: [ValidatorMixin],
  validators: {
    'user.phone' (value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号')
    },
    'user.code' (value) {
      return this.validate(value).required('请输入验证码').digit('请正确输入验证码').length(6, '请正确输入验证码')
    }
  },

  beforeRouteEnter(to, from, next) {
    if (to.query.accesstoken) {
      (to.query.accesstoken)
      store.dispatch('updateToken', to.query.accesstoken)
      store.dispatch('getUser').then(data => {
        next({
          name: to.query.to || 'authorizedTip'
        })
      })
    } else {
      next()
    }
  },

  mounted() {
    this.redirect = this.$route.query.redirect
    this.$route.query.openid && (this.user.openid = this.$route.query.openid) // eslint-disable-line
    this.user.phone = this.$store.getters.user.phone || ''
  },

  methods: {
    ...mapActions(['login', 'getMsgCode', 'getUser', 'updateToken']),
    submit() {
      this.$validate().then(success => {
        if (success) {
          this.login(this.user).then(data => {
            this.$router.push({
              name: this.redirect || 'authorizedTip'
            })
          })
        } else {
          this.$toast(this.validation.firstError(), 'error')
        }
      })
    },

    // 获取验证码
    toGetMsgCode() {
      this.$validate('user.phone').then(success => {
        if (success) {
          this.getMsgCode(this.user.phone).then(data => {
            if (data.ret === RET_CODE_MAP.OK) {
              this.countdownVisible = true
              this.$refs.fnCountdown.start()
            }
          })
        } else {
          this.$toast(this.validation.firstError('user.phone'), 'error')
        }
      })
    },

    onCountdownOver() {
      this.countdownVisible = false
    }
  },

  data() {
    return {
      redirect: null, //登录后跳转页面
      countdownVisible: false,
      user: {
        UserinfoValLogin: {},
        integraluserlevel: {},
        phone: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  background: white;
}

.login-form {
  // padding: 10px 0;
}
</style>
