<template lang="pug">
  .borrow-info
    form.borrow-form(@submit.prevent='submit()')
      .fields-header
        | 借款方案
      .fields
        mt-cell(title="借款金额", :value="user.integraluserlevel.Limit | fbCurrency('¥', '元')")
        mt-cell(title="应还日期", :value="borrowDuration")
        mt-cell(title="应还金额", :value="virtualMoney | fbCurrency('¥', '元')")
      .fields-header
        | 账户信息
        //- small
          i.iconfont.ui-icon-warn
          | 请填写您的真实信息，否则会影响借款。
      .fields
        mt-cell(title="姓名", :value="user.UserinfoValLogin.Name | fbFalse")
        //- mt-cell(title="登录手机号", :value="user.UserinfoValLogin.Userphone")
        mt-cell(title='身份证号', :value="model.idCard")
        mt-cell(title='银行卡号', is-link, @click.native="goChangeBankCard()")
          span {{bankCardForShow}} 修改
        mt-cell(title="开户行", :value="model.bank | fbFalse")
        mt-cell(title='银行预留手机号',  :value="model.bankPhone")
      .form-buttons
          mt-button.mint-button-block(type='primary', size='large', @click="repay()") 立即还款
</template>

<script>
import {
  QueryContract
} from '../../common/resources.js'
import repayMixins from './repay_mixins.js'
import {
  mapGetters
} from 'vuex'

export default {
  mixins: [repayMixins],
  beforeRouteEnter(to, from, next) {
    QueryContract.get().then(res => res.json())
      .then(data => {
        next(vm => {
          // hack data
          data.content = {
            idCard: '12313123',
            bankCard: '123123131',
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
  methods: {
    // ...mapMutations(['updateStateCode']),
    // 去修改银行卡
    goChangeBankCard() {
      this.$router.push({
        name: 'changeBankCardStep1'
      })
    }
  },
  computed: {
    ...mapGetters(['stateCode']),
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
