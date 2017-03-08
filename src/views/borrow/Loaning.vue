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
        td {{contractInfo.bankCard | fbFalse}}
      tr
        th 中国工商银行：
        td {{bankCardForShow | fbFalse}}
      tr
        th 还款日期：
        td {{contractInfo.bankPhone | fbFalse}}
      tr
        th 还款金额：
        td {{contractInfo.bankPhone | fbFalse}}
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

export default {
  computed: {
    ...mapGetters(['user'])
  },

  beforeRouteEnter(to, from, next) {
    QueryContract.get().then(res => res.json())
      .then(data => {
        next(vm => {
          // hack data
          data.content = {
            idCard: '12313123',
            bankCard: '123123131',
            bank: '测试银行',
            bankPhone: 123123123
          }

          if (data.content) {
            vm.contractInfoHasHistory = true
            Object.assign(vm.contractInfo, data.content)
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
