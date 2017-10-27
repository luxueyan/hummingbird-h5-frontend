<template lang="pug">
section.repaying.single-page-tip
  header
    h2
      fb-icon(name="chenggong")
      | 已提交
    p 您的提款请求已提交成功，系统将在<br>半小时内完成还款，感谢您使用极速蜂鸟。
  .table-card
    table
      caption
        i.iconfont.icon-fangan
        | 还款详情
      tbody
        tr
          th 还款金额：
          td {{contract.repaymentAmount | fbCurrency}}
        tr
          th {{contract.bankName}}：
          td {{contract.bankCard | fbCardNo}}
        tr
          th 还款日期：
          td {{contract.repaymentDate | fbFalse}}
    .tfoot
      | 查看
      router-link(:to="{name:'loanAgreement', params:{'transitionName': 'slideRightFade'}}") 《借款服务协议》

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

<style lang="scss">
</style>
