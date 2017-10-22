<template lang="pug">
section.add-bank-step1
  form(@submit.prevent='submit()')
    .fields-header
      p 请添加持卡人本人的银行卡
    .fields
      mt-cell(title="持卡人", :value="model.name")
      fb-field(v-mt-field-blur="{blur:getBank}", placeholder="点击问号查看支持银行卡", label='银行卡号', v-model="bankCardForShow", :state="getFieldState('model.bankCard')", @click.native="showFieldError($event, 'model.bankCard')")
        span(slot="label") 银行卡号
          i.iconfont.icon-wenhao(@click="showSupportBanks()")
      input(type="hidden", v-model='model.bankCard')
      mt-cell.field-cell(:class="{'empty': model.bankName === '自动匹配'}", title="开户行", :value="model.bankName")
      mt-field(label='银行预留手机号', placeholder="填写手机号", v-model="model.bankReservePhone", :state="getFieldState('model.bankReservePhone')", @click.native="showFieldError($event, 'model.bankReservePhone')")
    .form-buttons
      mt-button.mint-button-block(type='primary', size='large') 下一步
</template>

<script>
import CommonMixin from '@/views/common_mixin.js'
import ValidatorMixin from '@/views/validator_mixin.js'
import { isBankCard } from '@/common/utils.js'

export default {
  mixins: [CommonMixin, ValidatorMixin],
  methods: {
    async submit() {
      const success = await this.$validate()
      if (success) {
        this.$router.push({
          name: 'addBankStep2',
          params: {
            model: this.model
          }
        })
      } else {
        this.$toast(this.validation.firstError(), 'error')
      }
    }
  },

  validators: {
    'model.bankCard' (value) {
      return this.validate(value).required('请输入银行卡号')
        .custom(() => {
          if (this.bankCardNotSupported) {
            return '抱歉，您选择的银行卡不支持！'
          } else if (!isBankCard(value)) {
            return '请正确输入16-19位银行卡号'
          }
        })
    },
    'model.bankReservePhone' (value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号')
    },
    'model.bankName' (value) {
      return this.validate(value).required()
    }
  },

  data() {
    return {
      model: {
        name: this.$store.getters.user.name,
        bankCard: '',
        bankName: '自动匹配',
        bankCode: '',
        bankReservePhone: '',
        captcha: '',
        isDefault: true
      }
    }
  }
}
</script>

<style lang="scss">
.add-bank-step1 {
  input::-moz-placeholder {
    color: #c5c9d2;
    font-size: 14px;
    opacity: 1;
  }
  input:-ms-input-placeholder {
    color: #c5c9d2;
    font-size: 14px;
  }
  input::-webkit-input-placeholder {
    color: #c5c9d2;
    font-size: 14px;
  }
}
</style>
