<template lang="pug">
section.change-bank-card-step3.single-page-tip
  .logo
    i.iconfont.ui-icon-success
    //- h3 您的提款请求已发送成功，请耐心等待。
  article
    //- p 您的提款请求已发送成功，请耐心等待。
    table
      tr
        th 提款金额：
        td {{contractInfo.loanAmount | fbCurrency('', '元')}}
      tr
        th {{contractInfo.bank}}：
        td {{bankCardForShow | fbFalse}}
      tr
        th 还款日期：
        td {{contractInfo.endDate | fbFalse}}
      tr
        th 还款金额：
        td {{contractInfo.totalAmount | fbCurrency('', '元')}}
    small 您的提款请求已发送成功，请耐心等待。
  //- .footer
    mt-button.mint-button-block(type='primary', size='large') 关闭
</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  QueryContract
} from '../../common/resources.js'
import {
  contractInfo
} from '../../common/adaptors.js'

export default {
  computed: {
    ...mapGetters(['user'])
  },

  beforeRouteEnter(to, from, next) {
    QueryContract.get().then(res => res.json())
      .then(data => {
        next(vm => {
          if (data.data.content) {
            Object.assign(vm.contractInfo, contractInfo(data.data.content))
            vm.bankCardForShow = vm.contractInfo.bankCard.replace(/\d{4}(?=(\d{1,4}))/g, '$& ')
          }
        })
      })
  },
  methods: {

  },
  data() {
    return {
      bankCardForShow: '',
      contractInfo: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
