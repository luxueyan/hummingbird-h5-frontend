<template lang="pug">
section.change-bank-card-step3.single-page-tip
  .logo
    i.iconfont.icon-ku
    //- h3 提款失败！
  article
    p 由于支付系统升级，您的款项未能及时到账。
    p 我们将在24小时内人工处理您的请求。
    p 如有任何疑问，请直接留言咨询。
    //- p 原因：
      em {{stateMsg}}
  .footer.no-padding-top
    .simple-btns
      a(@click="checkLoanAgreement()") 查看《借款服务协议》
    //- .btns-group
      mt-button.mint-button-block(type='default', size='large', @click="$router.push({name: 'changeBankCardStep1'})") 更换银行卡
      mt-button.mint-button-block(type='primary', size='large', @click="drawMoney()") 重试
</template>

<script>
import {
  mapGetters
} from 'vuex'
import borrowMixins from '@/views/borrow/borrow_mixins.js'

export default {
  mixins: [borrowMixins],
  computed: {
    ...mapGetters(['stateMsg'])
  },
  methods: {
    checkLoanAgreement() {
      this.$router.push({
        name: 'loanAgreement'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
