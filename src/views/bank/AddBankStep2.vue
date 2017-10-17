<template lang="pug">
section.add-bank-step2
  form(@submit.prevent='submit()')
    .fields-header
      | 账户信息
      small 为保证您的安全，我们将向您的手机：{{model.bankReservePhone}}发送短信验证码，确认身份。
    .fields
      mt-field(label='', placeholder='请输入验证码', v-model='model.captcha', :state="getFieldState('model.captcha')", @click.native="showFieldError($event, 'model.captcha')")
        mt-button(type='default', @click.stop.prevent='toGetMsgCode(model.phone)', :disabled='countdownVisible')
          span(v-show='!countdownVisible') 发送验证码
          fb-countdown(ref='fnCountdown', v-show='countdownVisible', @countdown-over='onCountdownOver()')
    .form-buttons
      mt-button.mint-button-block(type='primary', size='large') 下一步
</template>

<script>
import ValidatorMixin from '@/views/validator_mixin.js'
import CommonMixin from '@/views/common_mixin.js'
import {
  bankCards
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
    'model.bankReservePhone' (value) {
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
        const data = await bankCards.save(this.model).then(res => res.json())
        if (data.code === RET_CODE_MAP.OK) {
          this.model.bankCardId = data.data.id
          this.$router.push({
            name: 'addBankStep3',
            params: {
              model: this.model
            }
          })
        }
      } else {
        this.$toast(this.validation.firstError(), 'error')
      }
    }
  },

  mounted() {
    this.model = this.$route.params.model || this.model
  },

  computed: {
    ...mapGetters(['user'])
  },

  data() {
    return {
      model: {
        bankReservePhone: '13333333333',
        captcha: ''
      },
      validatePhoneModel: 'model.bankReservePhone'
      // countdownVisible: false
    }
  }
}
</script>

<style lang="scss">
</style>
