<template lang="pug">
section.repay-failed.single-page-tip.error
  header.small-header
    h2
      fb-icon(name="shibai")
      | 还款失败
    p(v-html="err.repaymentReasonMsg")
  article
    h4 您还可以这样还款
    ul
      li
        | 方式一：更换一张充足余额的银行卡。
        router-link(:to="{name: 'bankList', params: {transitionName: 'slideRightFade', from: $route}}")
          mt-button.br2(type="default") 前往
      li 方式二：通过支付宝转账至我们公户fengniaosudai@163.com(请备注姓名+手机号）,转账后在公众号中通知客服。

</template>

<script>
import { repaymentError } from '@/common/resources.js'
import repayMixins from '@/views/repay/repay_mixins.js'

export default {
  mixins: [repayMixins],

  async beforeRouteEnter(to, from, next) {
    const data = await repaymentError.get({ contractId: this.$store.getters.user.currentOngoingContract.id }).then(res => res.json())
    next(vm => {
      vm.err = data.data
    })
  },

  filters: {
    errMsgPrune(val) {
      return val ? val.replace(/\[[^]]*\]/g, '') : ''
    }
  },

  mounted() {
    if (this.$route.params.fromDefaultBankSet) {
      this.repay()
    }
  },

  data() {
    return {
      err: {
        message: '银行卡余额不足，本卡今日可提交还款1次，<br>请确保卡内余额充足。'
      }
    }
  }
}
</script>


<style lang="scss">
@import "~assets/scss/_variables.scss";
.repay-failed {
  .mint-button {
    font-size: $font-size-xs;
    height: 23px;
    line-height: 23px;
    background-color: white;
    overflow: hidden;
    box-shadow: none;
    color: inherit;
  }
}
</style>
