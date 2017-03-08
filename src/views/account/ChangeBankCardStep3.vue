<template lang="pug">
section.change-bank-card-step3.single-page-tip
  .logo
    i.iconfont.ui-icon-success
    h3 信息变更成功！
  article
    table
      tr
        th 银行卡：
        td {{user.bankCard | fbFalse}}
      tr
        th 银行预留手机号：
        td {{user.bankPhone | fbFalse}}
      tr
        th 开户行：
        td {{user.bank | fbFalse}}
  .footer
    mt-button.mint-button-block(type='primary', size='large', @click='goOn()') {{confirmValue}}
</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  CUST_STATE_CODE_MAP
} from '../../constants.js'
import {
  includes
} from 'lodash'

export default {
  computed: {
    ...mapGetters(['user', 'stateCode']),
    borrowOrRepay() {
      if (
        includes([
          CUST_STATE_CODE_MAP.FIRST_BORROWER,
          CUST_STATE_CODE_MAP.CONTRACT_INFO_FILLED,
          CUST_STATE_CODE_MAP.DEBT_SETTELED,
          CUST_STATE_CODE_MAP.LOANING,
          CUST_STATE_CODE_MAP.LOAN_FAILED
        ], this.stateCode)) {
        return 'borrow'
      } else if (
        includes([
          CUST_STATE_CODE_MAP.DEBT_NOT_SETTLED,
          CUST_STATE_CODE_MAP.REPAYING,
          CUST_STATE_CODE_MAP.REPAY_FAILED
        ], this.stateCode)) {
        return 'repay'
      }
      return 'unknown'
    },
    confirmValue() {
      if (this.borrowOrRepay === 'borrow') {
        return '继续借款'
      } else if (this.borrowOrRepay === 'repay') {
        return '继续还款'
      }
      return '完成'
    }
  },

  methods: {
    goOn() {
      this.$router.push({
        name: 'borrowerInfo' // 随便跳走，会被路由拦截
      })

      /*if (this.borrowOrRepay === 'borrow') {
        this.$router.push({
          name: 'borrowerInfo'
        })
      } else if (this.borrowOrRepay === 'repay') {
        this.$router.push({
          name: 'repayInfo'
        })
      } else {
        this.$router.push({
          name: 'borrowerInfo'
        })
      }*/
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
