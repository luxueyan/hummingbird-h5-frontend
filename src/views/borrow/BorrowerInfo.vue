<template lang="pug">
  .borrow-info
    form.borrow-form(@submit.prevent='submit()')
      section
        .fields-header
          | 借款方案
          //- small.fr.loan-agreement 查看
            router-link(:to="{name:'loanAgreement'}")
              |《借款服务协议》
        .fields
          mt-cell(title="借款金额", :value="product.amount | fbCurrency('', '元')")
          mt-cell(title="借款天数", :value="product.loanDays | fbAppend('天')")
          mt-cell(:value="(product.serviceFee - product.discountAmount) | fbCurrency('', '元')")
            span(slot="title") 服务费
              i.iconfont.icon-info(@click="showServiceChargeTip")
              span.icon-sale7(v-show="borrowOption === 'vocation'")
          mt-cell(title="实际到账", :value="virtualMoney | fbCurrency('', '元')")
      fb-bank-cards(v-if="contractInfoHasHistory")
      section(v-if="!contractInfoHasHistory")
        .fields-header
          | 账户信息
          small
            i.iconfont.icon-warning
            | 请填写您的真实信息，否则会影响借款。
        .fields
          mt-cell(title="姓名", :value="model.name | fbFalse")
          //- mt-cell(title="登录手机号", :value="user.UserinfoValLogin.Userphone")
          //- template(v-if='!contractInfoHasHistory')
          mt-field(label='身份证号', placeholder='请输入身份证号', v-model="model.idCard", :state="getFieldState('model.idCard')", @click.native="showFieldError($event, 'model.idCard')")
          fb-field(v-mt-field-blur="{blur:getBank}", label='银行卡号', placeholder='请输入银行卡号', v-model="bankCardForShow", :state="getFieldState('model.bankCard')", @click.native="showFieldError($event, 'model.bankCard')")
            span(slot="label") 银行卡号
              i.iconfont.icon-info(@click="showSupportBanks()")
          input(type="hidden", v-model='model.bankCard')
          mt-cell(title="开户行", :value="model.bankName | fbFalse")
          mt-field(label='银行预留手机号', placeholder='请输入银行预留手机号', v-model="model.bankReservePhone", :state="getFieldState('model.bankReservePhone')", @click.native="showFieldError($event, 'model.bankReservePhone')")
          mt-field(label='验证码', placeholder='请输入验证码', v-model='model.captcha', :state="getFieldState('model.captcha')", @click.native="showFieldError($event, 'model.captcha')")
            mt-button(type='default', @click.stop.prevent='toGetMsgCode(model.bankReservePhone)', :disabled='countdownVisible')
              span(v-show='!countdownVisible') 发送验证码
              fb-countdown(ref='fnCountdown', v-show='countdownVisible' @countdown-over='onCountdownOver()')
          //- template(v-if='contractInfoHasHistory')
          //-   mt-cell(title='身份证号', :value="model.idCard")
          //-   mt-cell(title='银行卡号')
          //-     span {{bankCardForShow}}

          //-   mt-cell(title="开户行", :value="model.bankName | fbFalse")
          //-   mt-cell(title='银行预留手机号',  :value="model.bankReservePhone")
          //-   mt-cell(@click.native="goChangeBankCard()")
          //-     a.small 变更银行卡
        //- small.note *由于清明假期三方支付休假，今日放款预计4月5日下午到账，还款日期会根据实际到账时间顺延。
      .form-buttons.fixed
          mt-button.mint-button-block(type='primary', size='large') 立即提款
    //- fb-msgbox(ref="vocationMsgbox", title="十一期间放款安排", msgbox-class="shiyi-option-msgbox")
      div(style="text-align:left")
        p 您的借款的应还款日是{{repayDate}}。
        p 由于三方支付十一休息，我们在10月1日～8日无法按时放款。
        h4(style="margin: 10px 0 -10px;") 您可以：
      div(slot="cancelButtonContent")
        h3 延长期限，在{{vocationRepayDate}}还款
        small|（享费率7折优惠）
      div(slot="confirmButtonContent")
        h3 仍然在{{repayDate}}还款
</template>

<script>
import ValidatorMixin from '@/views/validator_mixin.js'
import CommonMixin from '@/views/common_mixin.js'
import {
  contractReturn,
  contractInitial,
  selfContracts
} from '@/common/resources.js'
import {
  RET_CODE_MAP,
  CUST_STATE_CODE_MAP
} from '@/constants.js'
import {
  isIdcard,
  isBankCard
} from '@/common/utils.js'
// import {
//   contractInfo
// } from '@/common/adaptors.js'
import {
  mapMutations,
  mapGetters
} from 'vuex'
import store from '@/store'
import moment from 'moment'
import { inRange, pick } from 'lodash'
import Vue from 'vue'
import FbMsgbox from '@/components/FbMsgbox.vue'
import FbBankCards from '@/components/FbBankCards.vue'

export default {
  mixins: [ValidatorMixin, CommonMixin],
  components: {
    FbMsgbox,
    FbBankCards
  },
  async beforeRouteEnter(to, from, next) {
    const user = store.getters.user
    if (!user.currentOngoingContract.id) {
      next()
      return
    }

    const data = await selfContracts.get({ id: user.currentOngoingContract.id }).then(res => res.json())
    next(vm => {
      if (data.data) {
        vm.contractInfoHasHistory = true
        // Object.assign(vm.model, pick(contractInfo(data.data.content), ['name', 'idCard', 'bankCard', 'bank', 'bankPhone']))
        Object.assign(vm.model, pick(data.data, ['idCard', 'bankCard', 'bankName', 'bankReservePhone']))
        vm.bankCardForShow = vm.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g, '$& ')
      }
    })
  },

  mounted() {
    // if (this._vocationJudge([+moment('2017-09-17 00:00:00').toDate(), +moment('2017-09-24 23:59:59')])) {
    //   this.repayDate = moment(this.now).add(this.user.product.Length, 'days').format('MM月DD日')
    //   this.vocationRepayDate = this._vocationRepayDateGet()
    //   this.$refs.vocationMsgbox.open(action => {
    //     if (action === 'cancel') {
    //       this.borrowOption = 'vocation'
    //       this.vocationRepayDays = this._vocationRepayDaysGet()
    //     }
    //   })
    // }
  },

  // watch: {
  //   'bankCardForShow' () {
  //     this.model.bankCard = this.bankCardForShow = this.bankCardForShow.replace(/\s/g, '')
  //     this.bankCardForShow = this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g, '$& ') //展示空格分隔的银行卡号
  //   }
  // },
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
    },
    'model.captcha' (value) {
      return this.validate(value).required('请输入验证码').length(6, '请正确输入验证码')
    }
  },
  methods: {
    ...mapMutations(['updateStateCode']),
    // 显示服务费详情
    showServiceChargeTip() {
      this.$msgBox('服务费包含', `
        <table>
          <tr><th>审核费用：</th><td style="text-align:left;">${Vue.filter('fbCurrency')(this.creditMoney, '', '元')}</td></tr>
          <tr><th>账户管理费：</th><td style="text-align:left;">${Vue.filter('fbCurrency')(this.manageMoney, '', '元')}</td></tr>
        </table>`)
    },

    // 9-17至9-22日借款提示判断
    _vocationJudge(dateScope) {
      return inRange(+this.now, ...dateScope)
    },

    // 获取延长期限的日期
    _vocationRepayDateGet() {
      const mapDate = {
        '0917': '10月10日',
        '0918': '10月11日',
        '0919': '10月12日',
        '0920': '10月13日',
        '0921': '10月17日',
        '0922': '10月18日',
        '0923': '10月19日',
        '0924': '10月20日'
      }
      return mapDate[moment(this.now).format('MMDD')] || ''
    },

    // 获取延长的天数
    _vocationRepayDaysGet() {
      const mapDate = {
        '10月10日': 23,
        '10月11日': 23,
        '10月12日': 23,
        '10月13日': 23,
        '10月17日': 26,
        '10月18日': 26,
        '10月19日': 26,
        '10月20日': 26
      }
      return mapDate[this.vocationRepayDate] || 0
    },

    // 立刻提款
    async submit() {
      let data = null
      if (!this.contractInfoHasHistory) {
        const success = await this.$validate()
        if (success) {
          if (this.borrowOption === 'vocation') {
            this.model.agreementDays = this.vocationRepayDays
          }
          data = await contractInitial.save(this.model).then(res => res.json())
        } else {
          this.$toast(this.validation.firstError(), 'error')
          return
        }
      } else {
        data = await contractReturn.save().then(res => res.json())
      }

      if (data.code === RET_CODE_MAP.OK) {
        this.updateStateCode(CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED)
        this.$router.push({
          name: 'signature'
        })
      }
    }

    // 去修改银行卡
    // goChangeBankCard() {
    //   this.$router.push({
    //     name: 'changeBankCardStep1'
    //   })
    // }
  },

  computed: {
    ...mapGetters(['stateCode', 'now']),
    // creditMoney() {
    //   const {
    //     Creditmoney
    //   } = this.user.integraluserlevel

    //   if (this.borrowOption === 'vocation') {
    //     return (Creditmoney / this.user.product.Length) * this.vocationRepayDays * 0.7 // 14是默认的产品的期限
    //   }
    //   return Creditmoney
    // },

    // manageMoney() {
    //   const {
    //     Managemoney
    //   } = this.user.integraluserlevel

    //   if (this.borrowOption === 'vocation') {
    //     return (Managemoney / this.user.product.Length) * this.vocationRepayDays * 0.7 // 14是默认的产品的期限
    //   }
    //   return Managemoney
    // },

    // serviceCharge() {
    //   return this.creditMoney + this.manageMoney
    // },
    // serviceCharge() {
    //   const {
    //     Creditmoney,
    //     Managemoney
    //   } = this.user.integraluserlevel
    //   return (Creditmoney + Managemoney) * (this.borrowOption === 'normal' ? 0.7 : 1)
    // },
    virtualMoney() {
      return this.product.amount - (this.product.serviceFee - this.product.discountAmount)
    }
  },

  data() {
    const stateUser = JSON.parse(JSON.stringify(this.$store.getters.user))
    const product = stateUser.productInfo[0]

    return {
      // qmNoteVisible: +moment().toDate() <= +new Date('2017-04-05 12:00:00'), // 4月5日下午以后不显示
      contractInfoHasHistory: false,
      validatePhoneModel: 'model.bankReservePhone',
      // bankCardNotSupported: false, // 银行卡不支持标记
      // countdownVisible: false,
      // bankCardForShow: '',
      borrowOption: 'normal', //normal, vacation 十一假期延长
      repayDate: '', // 正常还款日
      vocationRepayDate: '', // 延期还款日
      vocationRepayDays: product.loanDays,
      product, // 目前只有一个产品，默认设置为第一个
      model: {
        productId: product.id,
        name: stateUser.name,
        idCard: null,
        bankCard: null,
        captcha: '',
        bankName: '',
        bankReservePhone: null
      },
      user: stateUser
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';
.shiyi-option-msgbox {
  h3,
  h4 {
    font-weight: 400;
    font-size: 16px;
  }
  .mint-msgbox-btns {
    height: auto;
    flex-direction: column;
  }
  .mint-msgbox-btn {
    line-height: 1em;
    padding: 12px 0; // min-height: 35px;
  }
  .mint-msgbox-cancel,
  .mint-msgbox-confirm {
    border-right: 0;
    width: 100%;
    color: $primary-color;
    small {
      color: $primary-color;
    }
  }
  .mint-msgbox-cancel {
    border-bottom: 1px solid $border-color;
  }
}


.borrow-info {
  .icon-sale7 {
    color: $error-color;
    font-size: 12px;
    display: inline-block;
    padding: 1px 5px;
    border: 1px solid $error-color;
    border-radius: 4px;
    &:before {
      border: 1px solid $error-color;
    }
    &:after {
      font-size: 12px;

      content: '7折';
    }
  }
  .loan-agreement {
    margin-top: 5px;
  }

  small {
    &.note {
      display: block;
      padding: 10px;
      color: #888;
      line-height: 1.8em;
    }
  }
}
</style>
