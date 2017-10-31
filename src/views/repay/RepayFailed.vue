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
        | 方式一：继续用尾号{{contract.bankCard.slice(-4)}}还款。
        a(@click.prevent="repayRetry()")
          mt-button.br2(type="default") 重试
      li
        | 方式二：更换一张充足余额的银行卡。
        router-link(:to="{name: 'bankList', params: {from: $route}}")
          mt-button.br2(type="default") 前往
      li 方式三：通过支付宝转账至我们公户fengniaosudai@163.com(请备注姓名+手机号），转账后在公众号中通知客服。

</template>

<script>
import { repaymentError, selfContracts } from '@/common/resources.js'
import repayMixins from '@/views/repay/repay_mixins.js'
import store from '@/store'
import { RET_CODE_MAP, CUST_STATE_CODE_MAP } from '@/constants.js'

export default {
  mixins: [repayMixins],

  async beforeRouteEnter(to, from, next) {
    const user = store.getters.user
    const datas = await Promise.all([
      selfContracts.get({ id: user.currentOngoingContract.id }).then(res => res.json()),
      repaymentError.get({ contractId: user.currentOngoingContract.id }).then(res => res.json())
    ])

    next(vm => {
      if (datas[0].code === RET_CODE_MAP.OK) {
        vm.contract = Object.assign({}, datas[0].data)
      }
      if (datas[1].code === RET_CODE_MAP.OK) {
        vm.err = datas[1].data
      }
    })
  },

  methods: {
    repayRetry() {
      this.$store.commit('updateStateCode', CUST_STATE_CODE_MAP.DEBT_NOT_SETTLED)
      this.$router.push({
        name: 'repayInfo'
      })
    }
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
      contract: { bankCard: '' },
      err: {
        repaymentReasonMsg: ''
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
