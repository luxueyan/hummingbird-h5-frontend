<template lang="pug">
section
  .fields-header
    | 银行账户
    //- small
      i.iconfont.icon-ku
      | 请填写您的真实信息，否则会影响借款。
  .fields
    .cells
      mt-cell(is-link, :to="{name: 'bankList'}")
        .content(slot="title")
          .title
            h3 {{defaultBankCard.bankName}}
          p {{defaultBankCard.bankCard}}
    router-link.add-bankcard(:to="{name: 'addBankStep1', params: {transitionName: 'slideRightFade'}}") + 添加银行卡
</template>

<script>
import { bankCards } from '@/common/resources.js'
import { RET_CODE_MAP } from '@/constants.js'
import { find } from 'lodash'

export default {
  mounted() {
    bankCards
      .get()
      .then(res => res.json())
      .then(data => {
        if (data.code === RET_CODE_MAP.Ok) {
          this.defaultBankCard = find(data.data.bankCards, bd => bd.isDefault)
          console.log(this.defaultBankCard)
        }
      })
  },

  data() {
    return {
      defaultBankCard: {
        bankName: '',
        bankCard: ''
      }
    }
  }
}
</script>
