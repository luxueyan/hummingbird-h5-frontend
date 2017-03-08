<template lang="pug">
  .borrow-info
    form.borrow-form(@submit.prevent='submit()')
      .fields-header
        | 借款方案
      .fields
        mt-cell(title="借款金额", :value="user.integraluserlevel.Limit | fbCurrency('¥', '元')")
        mt-cell(title="借款天数", :value="borrowDuration | fbAppend('天')")
        mt-cell(:value="serviceCharge | fbCurrency('¥', '元')")
          span(slot="title") 服务费
            i.iconfont.ui-icon-info(@click="showServiceChargeTip")
        mt-cell(title="实际到账", :value="virtualMoney | fbCurrency('¥', '元')")
      .fields-header
        | 账户信息
        small
          i.iconfont.ui-icon-warn
          | 请填写您的真实信息，否则会影响借款。
      .fields
        mt-cell(title="姓名", :value="user.UserinfoValLogin.Name | fbFalse")
        mt-cell(title="登录手机号", :value="user.UserinfoValLogin.Userphone")
        template(v-if='!contractInfoHasHistory')
          mt-field(label='身份证号', placeholder='请输入身份证号', v-model="model.idCard", :state="getFieldState('model.idCard')", @click.native="showFieldError($event, 'model.idCard')")
          mt-field(v-mt-field-blur="{blur:getBank}", label='银行卡号', placeholder='请输入银行卡号', v-model="bankCardForShow", :state="getFieldState('model.bankCard')", @click.native="showFieldError($event, 'model.bankCard')")
          input(type="hidden", v-model='model.bankCard')
          mt-cell(title="开户行", :value="model.bank | fbFalse")
          mt-field(label='银行预留手机号', placeholder='请输入银行预留手机号', v-model="model.bankPhone", :state="getFieldState('model.bankPhone')", @click.native="showFieldError($event, 'model.bankPhone')")
          //- mt-field(label='验证码', placeholder='请输入验证码', v-model='model.code', :state="getFieldState('model.code')", @click.native="showFieldError($event, 'user.code')")
            mt-button(type='default', @click.stop.prevent='toGetMsgCode()', :disabled='countdownVisible')
              span(v-show='!countdownVisible') 发送验证码
              fb-countdown(ref='fnCountdown', v-show='countdownVisible' @countdown-over='onCountdownOver()')
        template(v-if='contractInfoHasHistory')
          mt-cell(title='身份证号', :value="model.idCard")
          mt-cell(title='银行卡号', is-link, @click.native="goChangeBankCard()")
            span {{bankCardForShow}} 修改
          mt-cell(title="开户行", :value="model.bank | fbFalse")
          mt-cell(title='银行预留手机号',  :value="model.bankPhone")
      .form-buttons
          mt-button.mint-button-block(type='primary', size='large') 立即提款
</template>

<script>
import ValidatorMixin from '../validator_mixin.js'
import {
  isDetectionBankCard,
  SetAgreementMsg,
  QueryContract
} from '../../common/resources.js'
import {
  RET_CODE_MAP,
  CUST_STATE_CODE_MAP
} from '../../constants.js'
import {
  isIdcard,
  isBankCard
} from '../../common/utils.js'
import {
  mapMutations,
  mapGetters
} from 'vuex'

export default {
  mixins: [ValidatorMixin],
  beforeRouteEnter(to, from, next) {
    QueryContract.get().then(res => res.json())
      .then(data => {
        next(vm => {
          // hack data
          data.content = {
            idCard: '12313123',
            bankCard: '1231231311231231311',
            bank: '测试银行',
            bankPhone: 123123123
          }

          if (data.content) {
            vm.contractInfoHasHistory = true
            Object.assign(vm.model, data.content)
            vm.bankCardForShow = vm.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g, '$& ')
          }
        })
      })
  },

  watch: {
    'bankCardForShow' () {
      this.model.bankCard = this.bankCardForShow = this.bankCardForShow.replace(/\s/g, '')
      this.bankCardForShow = this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g, '$& ') //展示空格分隔的银行卡号
    }
  },
  validators: {
    'model.idCard' (value) {
      return this.validate(value).required('请输入身份证号').length(18, '请正确输入18位身份证')
        .custom(() => {
          if (!isIdcard(value)) {
            return '请正确输入二代18位身份证'
          }
        })
    },
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
    'model.bank' (value) {
      return this.validate(value).required()
    }
    // 'model.code' (value) {
    //   return this.validate(value).required('请输入验证码').length(6, '请正确输入验证码')
    // }
  },
  methods: {
    ...mapMutations(['updateStateCode']),
    // 显示服务费详情
    showServiceChargeTip() {
      const {
        Creditmoney,
        Managemoney
      } = this.user.integraluserlevel
      this.$root.MessageBox('服务费包含', `
        <table>
          <tr><th>审核费用：</th><td>${Creditmoney}元</td></tr>
          <tr><th>账户管理费：</th><td>${Managemoney}元</td></tr>
        </table>`)
    },
    // 获取银行卡开户行
    getBank() {
      if (this.validation.isPassed('model.bankCard')) {
        isDetectionBankCard.get({
          bankCard: this.model.bankCard
        }).then(res => res.json()).then(data => {
          this.model.bank = data.data.bank
          this.bankCardNotSupported = data.ret === RET_CODE_MAP.BANK_CARD_NOT_SUPPORTED
        })
      }
    },
    // 立刻提款
    submit() {
      if (this.bankCardNotSupported) {
        this.$root.toast('抱歉，您选择的银行卡不支持！', 'error')
        return
      }

      this.$validate().then(success => {
        if (success) {
          SetAgreementMsg.get(this.model)
            .then(res => res.json)
            .then(data => {
              if (data.ret === RET_CODE_MAP.OK) {
                this.updateStateCode(CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED)
              }
            })
        } else {
          this.$root.toast(this.validation.firstError(), 'error')
        }
      })
    },
    // 去修改银行卡
    goChangeBankCard() {
      this.$router.push({
        name: 'changeBankCardStep1'
      })
    }
  },
  computed: {
    ...mapGetters(['stateCode']),
    borrowDuration() {
      return 14
    },
    serviceCharge() {
      const {
        Creditmoney,
        Managemoney
      } = this.user.integraluserlevel
      return Creditmoney + Managemoney
    },
    virtualMoney() {
      const {
        Limit,
        Creditmoney,
        Managemoney
      } = this.user.integraluserlevel
      return Limit - Creditmoney - Managemoney
    }
  },
  data() {
    const stateUser = JSON.parse(JSON.stringify(this.$store.getters.user))
    return {
      contractInfoHasHistory: false,
      bankCardNotSupported: false, // 银行卡不支持标记
      countdownVisible: false,
      bankCardForShow: '',
      model: {
        name: stateUser.UserinfoValLogin.Name,
        idCard: null,
        bankCard: null,
        bank: '',
        bankPhone: null
      },
      user: stateUser
    }
  }
}
</script>
