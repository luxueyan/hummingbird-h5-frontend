<template lang="pug">
section.single-page-tip
  header
    h2
      fb-icon(name="dengdai")
      | 已提交
    p 您的提款请求已提交，系统将在<br>1小时内放款，请耐心等待。
  .table-card
    table
      caption
        i.iconfont.icon-fangan
        | 借款详情
      tbody
        tr
          th 提款金额：
          td {{contract.contractAmount | fbCurrency}}
        tr
          th {{contract.bankName}}：
          td {{contract.bankCard | fbCardNo}}
        tr
          th 应还日期：
          td {{contract.contractEndDate | fbFalse}}
        tr
          th 还款金额：
          td {{contract.contractAmount | fbCurrency}}
    .tfoot
      | 查看
      a(@click.prevent="$router.push({name:'loanAgreement'})") 《借款服务协议》

</template>

<script>
import {
  selfContracts
} from '@/common/resources.js'
import store from '@/store'

export default {
  async beforeRouteEnter(to, from, next) {
    const user = store.getters.user
    const data = await selfContracts.get({ id: user.currentOngoingContract.id }).then(res => res.json())
    next(vm => {
      if (data.data) {
        vm.contract = Object.assign({}, data.data)
      }
    })
  },

  data() {
    return {
      contract: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
