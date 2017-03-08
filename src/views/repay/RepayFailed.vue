<template lang="pug">
section.change-bank-card-step3.single-page-tip
  .logo
    i.iconfont.ui-icon-warn
    h3 还款失败！
  article
    p 原因：
      em {{stateMsg}}
  .footer
    .btns-group
      mt-button.mint-button-block(type='default', size='large', @click="$router.push({name: 'changeBankCardStep1'})") 更换银行卡
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
  }
}
</script>

<style lang="scss" scoped>
</style>
