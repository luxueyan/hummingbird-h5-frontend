<template lang="pug">
section.add-bank-step3.single-page-tip
  header
    img(src="~assets/images/success-icon.png")
    h2 您的银行卡添加成功
  .cells-title
    | 银行卡信息
  .cells
    mt-cell(title="卡号", :value="model.bankCard")
    mt-cell(title="开户行", :value="model.bankName")
    mt-cell(title="银行预留手机号",
    :value="model.bankReservePhone",
    is-link, @click.native="changeBankPhone()")
  .footer
    mt-button.mint-button-block(type='primary', size='large', @click='goOn()') 完成
</template>

<script>
import { mapGetters } from 'vuex'
import { merge } from 'lodash'

export default {
  mounted() {
    this.model = this.$route.params.model || this.model
  },

  methods: {
    goOn() {
      this.$router.push(this.$route.params.from ? merge({
        params: {
          fromDefaultBankSet: this.$route.params.from.name === 'repayFailed' // 用于触发再次还款
        }
      }, this.$route.params.from) : {
        name: 'borrowInfo'
      })
    },
    changeBankPhone() {
      this.$router.push({
        name: 'changeBankPhoneStep1',
        params: {
          bankCardId: this.model.bankCardId,
          from: this.$route
        }
      })
    }
  },

  computed: {
    ...mapGetters(['stateCode'])
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
@import "~assets/scss/_variables.scss";
.add-bank-step3 {
  header {
    background-color: $primary-color;
    height: 155px;
    text-align: center;
    color: white;
    img {
      margin-top: 10px;
      width: 144px;
    }
    h2 {
      font-size: $font-size-xxl;
      margin-top: 10px;
      font-weight: normal;
    }
  }
  .cells-title {
    padding: 10px 15px;
    color: $minor-font-color;
  }
}
</style>
