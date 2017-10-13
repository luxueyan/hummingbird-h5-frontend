<template lang="pug">
  .repay-info
    .form
      .fields-header
        | 还款计划
        small.fr.loan-agreement 查看
          router-link(:to="{name:'loanAgreement', params:{ transitionName: 'slideRightFade'}}")
            |《借款服务协议》
      .fields
        mt-cell(title="借款金额", :value="model.paymentAmount | fbCurrency('', '元')")
        mt-cell(title="应还日期", :value="model.repaymentDate | fbFalse")
        mt-cell(title="应还金额", :value="model.repaymentAmount | fbCurrency('', '元')")
      fb-bank-cards
      //- .fields-header
        | 账户信息
        //- small
          i.iconfont.icon-ku
          | 请填写您的真实信息，否则会影响借款。
      //- .fields
        mt-cell(title="姓名", :value="model.name | fbFalse")
        //- mt-cell(title="登录手机号", :value="user.UserinfoValLogin.Userphone")
        mt-cell(title='身份证号', :value="model.idCard")
        mt-cell(title='银行卡号')
          span {{bankCardForShow}}
        mt-cell(title="开户行", :value="model.bankName| fbFalse")
        mt-cell(title='银行预留手机号',  :value="model.bankReservePhone")
        mt-cell(@click.native="goChangeBankCard()")
          a.small 变更银行卡
      .form-buttons.fixed
          mt-button.mint-button-block(type='primary', size='large', @click="repayConfirm()") 立即还款
</template>

<script>
import {
  selfContracts
} from '@/common/resources.js'
import repayMixins from '@/views/repay/repay_mixins.js'
import {
  mapGetters
} from 'vuex'
import FbBankCards from '@/components/FbBankCards.vue'
import { RET_CODE_MAP } from '@/constants.js'
import store from '@/store'
import moment from 'moment'

export default {
  mixins: [repayMixins],
  components: {
    FbBankCards
  },
  beforeRouteEnter(to, from, next) {
    const user = store.getters.user
    selfContracts.get({ id: user.currentOngoingContract.id }).then(res => res.json())
      .then(data => {
        next(vm => {
          if (data.code === RET_CODE_MAP.OK) {
            Object.assign(vm.model, data.data)
            vm.bankCardForShow = vm.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g, '$& ')
          }
        })
      })
  },
  methods: {
    // ...mapMutations(['updateStateCode']),
    // 去修改银行卡
    goChangeBankCard() {
      this.$router.push({
        name: 'bankList',
        params: {
          transitionName: 'slideRightFade'
        }
      })
    },

    repayConfirm() {
      if (new Date() - moment(this.model.startDateTs).toDate() <= 86400000) { // 如果小于一天就还款，给出提示
        this.$msgBox.confirm('确认提交还款?').then(action => {
          if (action === 'confirm') {
            this.repay()
          }
        }).catch(() => {})
      } else {
        this.repay()
      }
    }
  },
  computed: {
    ...mapGetters(['stateCode'])
  },
  data() {
    const stateUser = JSON.parse(JSON.stringify(this.$store.getters.user))
    return {
      bankCardForShow: '',
      model: {
        name: stateUser.name,
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
