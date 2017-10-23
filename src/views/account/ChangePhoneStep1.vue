<template lang="pug">
section.change-phone-step1
  form.simple-form(@submit.prevent='submit()')
    .fields-header
      h3 旧手机号验证
      small 为保证您的安全，我们将向您的手机：{{model.phone | fbCardNo}}发送短信验证码，确认身份。
    .fields
      mt-field(label='', placeholder='请输入验证码', v-model='model.captcha', :state="getFieldState('model.captcha')", @click.native="showFieldError($event, 'model.captcha')")
        mt-button(type='default', @click.stop.prevent='toGetMsgCode()', :disabled='countdownVisible')
          span(v-show='!countdownVisible') 获取验证码
          fb-countdown(ref='fnCountdown', v-show='countdownVisible', @countdown-over='onCountdownOver()')
    .form-buttons
      mt-button.mint-button-block(type='primary', size='large') 下一步
</template>

<script>
import ValidatorMixin from '@/views/validator_mixin.js'
import CommonMixin from '@/views/common_mixin.js'
import {
  validateOldPhone
} from '@/common/resources.js'
import {
  RET_CODE_MAP
} from '@/constants.js'
import {
  mapGetters
} from 'vuex'

export default {
  mixins: [CommonMixin, ValidatorMixin],
  validators: {
    'model.phone' (value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号')
    },
    'model.captcha' (value) {
      return this.validate(value).required('请输入验证码').digit('请正确输入验证码').length(6, '请正确输入验证码')
    }
  },

  methods: {
    async submit() {
      const success = await this.$validate()
      if (success) {
        const data = await validateOldPhone.save(this.model).then(res => res.json())
        if (data.code === RET_CODE_MAP.OK) {
          this.$router.push({
            name: this.model.verifyType ? 'changeBankPhoneStep2' : 'changePhoneStep2',
            params: {
              bankCardId: this.model.bankCardId || null,
              from: this.$route.params.from
            }
          })
        }
      } else {
        this.$toast(this.validation.firstError(), 'error')
      }
    }
  },

  created() {
    if (this.$route.params.bankCardId) {
      this.model.bankCardId = this.$route.params.bankCardId
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  data() {
    const user = this.$store.getters.user
    return {
      model: {
        // id: user.id,
        phone: user.phone,
        verifyType: this.$route.meta.verifyType || 0, //0 验证注册手机号； 1 验证银行预留手机号
        captcha: ''
      },
      validatePhoneModel: 'model.phone'
    }
  }
}
</script>

<style lang="scss">
</style>
