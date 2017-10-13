<template lang="pug">
section.change-bank-card-step3.single-page-tip
  .logo
    i.iconfont.icon-dengdai
    //- h3 您的提款请求已发送成功，请耐心等待。
  article
    //- p 您的提款请求已发送成功，请耐心等待。
    table
      tr
        th 提款金额：
        td {{contract.paymentAmount | fbCurrency('', '元')}}
      tr
        th {{contract.bankName}}：
        td {{bankCardForShow | fbFalse}}
      tr
        th 还款日期：
        td {{contract.repaymentDate | fbFalse}}
      tr
        th 还款金额：
        td {{contract.repaymentAmount | fbCurrency('', '元')}}
    small 您的提款请求已发送成功，请耐心等待。
  .footer.no-padding-top
    .simple-btns
      a(@click="checkLoanAgreement()") 查看《借款服务协议》
    //- mt-button.mint-button-block(type='primary', size='large') 关闭
</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  selfContracts
} from '@/common/resources.js'
import store from '@/store'

export default {
  computed: {
    ...mapGetters(['user'])
  },

  beforeRouteEnter(to, from, next) {
    const user = store.getters.user
    selfContracts.get({ id: user.currentOngoingContract.id }).then(res => res.json())
      .then(data => {
        next(vm => {
          if (data.data) {
            vm.contract = Object.assign({}, data.data)
            vm.bankCardForShow = vm.contract.bankCard.replace(/(\d{4})\d+(\d{4})/g, '$1****$2')
          }
        })
      })
  },

  methods: {
    checkLoanAgreement() {
      this.$router.push({
        name: 'loanAgreement'
      })
    }
  },

  data() {
    return {
      bankCardForShow: '',
      contract: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
