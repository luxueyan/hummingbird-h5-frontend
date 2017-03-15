<template lang="pug">
section
  form.change-bank-card-form(@submit.prevent='submit()')
    .fields-header
      | 账户信息
      small 您即将变更银行卡信息，为保证您的安全，我们将向您的手机：{{user.phone}}发送短信验证码，确认身份。
    .fields
      mt-field(label='', placeholder='请输入验证码', v-model='model.phoneMsg', :state="getFieldState('model.phoneMsg')", @click.native="showFieldError($event, 'model.phoneMsg')")
        mt-button(type='default', @click.stop.prevent='toGetMsgCode()', :disabled='countdownVisible')
          span(v-show='!countdownVisible') 发送验证码
          fb-countdown(ref='fnCountdown', v-show='countdownVisible', @countdown-over='onCountdownOver()')
    .form-buttons
      mt-button.mint-button-block(type='primary', size='large') 下一步
</template>

<script>
import FbCountdown from '../../components/FbCountdown.vue'
import ValidatorMixin from '../validator_mixin.js'
import {
  updateInfoSendMsgFromPhone,
  validateUpdateInfoMsgFromPhone
} from '../../common/resources.js'
import {
  RET_CODE_MAP
} from '../../constants.js'
import {
  mapGetters
} from 'vuex'

export default {
  mixins: [ValidatorMixin],
  components: {
    FbCountdown
  },

  validators: {
    'model.phoneMsg' (value) {
      return this.validate(value).required('请输入验证码').digit('请正确输入验证码').length(6, '请正确输入验证码')
    }
  },

  methods: {
    // 获取验证码
    toGetMsgCode() {
      updateInfoSendMsgFromPhone.get().then(res => res.json()).then(data => {
        if (data.ret === RET_CODE_MAP.OK) {
          this.countdownVisible = true
          this.$refs.fnCountdown.start()
        }
      })
    },
    onCountdownOver() {
      this.countdownVisible = false
    },

    submit() {
      this.$validate().then(success => {
        if (success) {
          validateUpdateInfoMsgFromPhone.get(this.model).then(res => res.json()).then(data => {
            if (data.ret === RET_CODE_MAP.OK) {
              this.$router.push({
                name: 'changeBankCardStep2'
              })
            }
          })
        } else {
          this.$root.toast(this.validation.firstError(), 'error')
        }
      })
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  data() {
    return {
      model: {
        phoneMsg: ''
      },
      countdownVisible: false
    }
  }
}
</script>

<style lang="scss">
</style>
