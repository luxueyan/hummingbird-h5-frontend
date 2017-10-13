<template lang="pug">
section.add-bank-step3.single-page-tip
  .logo
    i.iconfont.icon-xiao
    h3 您的银行卡添加成功
  .cells-title
    | 银行卡信息
  .cells
    mt-cell(title="卡号", :value="model.bankCard")
    mt-cell(title="开户行", :value="model.bankName")
    mt-cell(title="银行预留手机号",
    :value="model.bankReservePhone",
    is-link, @click.native="changeBankPhone()")
  .footer
    mt-button.mint-button-block(type='primary', size='large', @click='goOn()') {{confirmValue}}
</template>

<script>
import { mapGetters } from 'vuex'
import { CUST_STATE_CODE_MAP } from '@/constants.js'
import { includes } from 'lodash'

export default {
  mounted() {
    this.model = this.$route.params.model || this.model
  },

  methods: {
    goOn() {
      this.$router.push({
        name: 'borrowInfo',
        params: {
          transitionName: 'slideRightFade'
        }
      })
    },
    changeBankPhone() {
      this.$router.push({
        name: 'changeBankPhoneStep1',
        params: {
          transitionName: 'slideRightFade',
          bankCardId: this.model.bankCardId,
          from: this.$route.name
        }
      })
    }
  },

  computed: {
    ...mapGetters(['stateCode']),
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
  data() {
    return {
      model: {
        bankCardId: '',
        bankCard: '',
        bankName: '',
        bankReservePhone: ''
      }
    }
  }
}
</script>

<style lang="scss">
.add-bank-step3 {
  .cells-title {
    padding: 10px;
  }
}
</style>
