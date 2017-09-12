<template lang="pug">
section
  form.change-bank-card-form(@submit.prevent='submit()')
    .fields-header
      | 更新银行卡信息
    .fields
      fb-field(v-mt-field-blur="{blur:getBank}", label='银行卡号', :placeholder='placeholders.bankCard', v-model="bankCardForShow", :state="getFieldState('model.bankCard')", @click.native="showFieldError($event, 'model.bankCard')")
        span(slot="label") 银行卡号
          i.iconfont.icon-info(@click="showSupportBanks()")
      input(type="hidden", v-model='model.bankCard')
      mt-field(label='银行预留手机号', :placeholder='placeholders.bankPhone', v-model="model.bankPhone", :state="getFieldState('model.bankPhone')", @click.native="showFieldError($event, 'model.bankPhone')")
      mt-cell(title="开户行", :value="model.bankName | fbFalse")
    .form-buttons
      mt-button.mint-button-block(type='primary', size='large') 下一步
</template>

<script>
import ValidatorMixin from '@/views/validator_mixin.js'
import CommonMixin from '@/views/common_mixin.js'
import FbField from '@/components/FbField.vue'
import {
  isDetectionBankCard,
  updateBankInfo,
  QueryContract
} from '@/common/resources.js'
import {
  RET_CODE_MAP
} from '@/constants.js'
import {
  isBankCard
} from '@/common/utils.js'
import {
  contractInfo
} from '@/common/adaptors.js'
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  mixins: [ValidatorMixin, CommonMixin],
  components: {
    FbField
  },
  beforeRouteEnter(to, from, next) {
    QueryContract.get().then(res => res.json())
      .then(data => {
        const contract = contractInfo(data.data.content)
        next(vm => {
          if (data.data.content) {
            vm.contractInfoHasHistory = true
            vm.placeholders.bankCard = contract.bankCard.replace(/\d{4}(?=(\d{1,4}))/g, '$& ')
            vm.placeholders.bankPhone = contract.bankPhone
            vm.model.bankName = contract.bank
            // Object.assign(vm.model, contractInfo(data.data.content))
            // vm.model.bankName = vm.model.bank
            // vm.bankCardForShow = vm.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g, '$& ')
          }
        })
      })
  },

  validators: {
    'model.bankCard' (value) {
      return this.validate(value).required('请输入银行卡号')
        .custom(() => {
          if (!isBankCard(value)) {
            return '请正确输入16-19位银行卡号'
          }
        })
    },
    'model.bankPhone' (value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号')
    },
    'model.bankName' (value) {
      return this.validate(value).required()
    }
  },

  watch: {
    'bankCardForShow' () {
      this.model.bankCard = this.bankCardForShow = this.bankCardForShow.replace(/\s/g, '')
      this.bankCardForShow = this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g, '$& ') //展示空格分隔的银行卡号
    }
  },

  methods: {
    ...mapMutations(['updateUser']),
    // 获取银行卡开户行
    getBank() {
      if (this.validation.isPassed('model.bankCard')) {
        isDetectionBankCard.get({
          bankCard: this.model.bankCard
        }).then(res => res.json()).then(data => {
          this.model.bankName = data.data.bank
          this.bankCardNotSupported = data.code === RET_CODE_MAP.BANK_CARD_NOT_SUPPORTED
        })
      }
    },
    submit() {
      if (this.bankCardNotSupported) {
        this.$toast('抱歉，您选择的银行卡不支持！', 'error')
        return
      }

      // 将placeholder复制给Model
      if (!this.model.bankCard) {
        this.bankCardForShow = this.placeholders.bankCard
        this.model.bankCard = this.placeholders.bankCard.replace(/\s/g, '')
      }
      if (!this.model.bankPhone) {
        this.model.bankPhone = this.placeholders.bankPhone
      }

      this.$validate().then(success => {
        if (success) {
          updateBankInfo.save(this.model).then(res => res.json()).then(data => {
            if (data.code === RET_CODE_MAP.OK) {
              // 添加更新银行卡state信息
              this.updateUser(Object.assign({}, this.user, this.model, {
                bank: this.model.bankName
              }))

              this.$router.push({
                name: 'changeBankCardStep3',
                params: {
                  transitionName: 'slideRightFade'
                }
              })
            }
          })
        } else {
          this.$toast(this.validation.firstError(), 'error')
        }
      })
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  data() {
    return {
      bankCardNotSupported: false,
      bankCardForShow: '',
      placeholders: {
        bankCard: '',
        bankPhone: null
      },
      model: {
        bankCard: '',
        bankPhone: null,
        bankName: ''
      }
    }
  }
}
</script>

<style lang="scss">
.change-bank-card-form {
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
