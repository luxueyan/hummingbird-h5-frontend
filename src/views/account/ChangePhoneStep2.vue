<template lang="pug">
section.change-phone-step2
  form.simple-form(@submit.prevent='submit()')
    .fields-header
      h3 新手机号注册
      //- small 为保证您的安全，我们将向您的手机：{{model.phone}}发送短信验证码，确认身份。
    .fields
      mt-field(label='', placeholder='请输入新手机号', v-model='model.phone', :state="getFieldState('model.phone')", @click.native="showFieldError($event, 'model.phone')")
      mt-field(label='', placeholder='请输入验证码', v-model='model.captcha', :state="getFieldState('model.captcha')", @click.native="showFieldError($event, 'model.captcha')")
        mt-button(type='default', @click.stop.prevent='toGetMsgCode()', :disabled='countdownVisible')
          span(v-show='!countdownVisible') 获取验证码
          fb-countdown(ref='fnCountdown', v-show='countdownVisible', @countdown-over='onCountdownOver()')
    .form-buttons
      mt-button.mint-button-block(type='primary', size='large') 完成
</template>

<script>
import ValidatorMixin from '@/views/validator_mixin.js'
import CommonMixin from '@/views/common_mixin.js'
import {
  changePhone
} from '@/common/resources.js'
import {
  RET_CODE_MAP
} from '@/constants.js'
import {
  mapGetters,
  mapMutations
} from 'vuex'
import msgBox from '@/common/custom_msgbox.js'

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
    ...mapMutations(['updateUserPhone']),
    async submit() {
      const success = await this.$validate()
      if (success) {
        const data = await changePhone.save(this.model).then(res => res.json())

        if (data.code === RET_CODE_MAP.OK) {
          const _self = this
          msgBox({
            title: '手机号变更成功',
            message: this.model.verifyType ? `您的尾号${this.model.bankCard.slice(-4)}的银行卡预留手机号已修改为${this.model.phone}` : `您的注册手机号已修改为${this.model.phone}`,
            confirmButtonText: '知道了',
            classes: ['custom-msgbox', 'success-msgbox'],
            callback(action) {
              if (_self.model.verifyType === 0) _self.updateUserPhone(_self.model.phone)
              _self.$router.push(_self.$route.params.from ? Object.assign({}, _self.$route.params.from) : {
                name: 'borrowInfo'
              })
            }
          })
          // this.$msgBox()
        }
      } else {
        this.$toast(this.validation.firstError(), 'error')
      }
    }
  },

  created() {
    if (this.$route.params.bankCardId) {
      this.model.bankCardId = this.$route.params.bankCardId
      this.model.bankCard = this.$route.params.bankCard
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  data() {
    // const user = this.$store.getters.user
    return {
      model: {
        // id: user.id,
        phone: '',
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
