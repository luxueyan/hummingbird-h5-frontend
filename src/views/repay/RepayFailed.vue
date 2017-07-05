<template lang="pug">
section.change-bank-card-step3.single-page-tip
  .logo
    i.iconfont.ui-icon-warn
    //- h3 还款失败！
  article
    p 请确认您的绑定银行卡账户余额充足。
    p 如有任何疑问，欢迎联系客服咨询。
    //- p 原因：
      em {{stateMsg}}
  .footer.no-padding-top
    .simple-btns
      a.large(@click="showCommonFailedReasons()") 常见失败原因
      //- a.large(@click="repay()") 重试
    .btns-group
      //- mt-button.mint-button-block(type='default', size='large', @click="$router.push({name: 'changeBankCardStep1'})") 更换银行卡
      mt-button.mint-button-block(type='primary', size='large', @click="repay()") 重试
</template>

<script>
import {
  mapGetters
} from 'vuex'
import repayMixins from './repay_mixins.js'

export default {
  mixins: [repayMixins],
  computed: {
    ...mapGetters(['stateMsg'])
  },
  methods: {
    showCommonFailedReasons() {
      this.$messagebox({
        title: '常见失败原因',
        message: `<ol>
          <li>账户余额是否充足</li>
          <li>银行卡号是否正确</li>
          <li>银行预留手机号是否正确</li>
        </ol>`,
        confirmButtonText: '我知道了'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.btns-group {
  margin-top: 15px;
}
</style>
