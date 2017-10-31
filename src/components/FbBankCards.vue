<template lang="pug">
section.fb-bank-cards
  .fields-header
    i.iconfont.icon-bank-card3
    | 银行账户
    //- small
      i.iconfont.icon-ku
      | 请填写您的真实信息，否则会影响借款。
  .fields
    .cells
      mt-cell.pt10(is-link, @click.native="$router.push({name: 'bankList'})")
        .content(slot="title")
          .content-icon
            fb-icon(:name="getBankIcon(defaultBankCard.bankName)")
          .content-body
            .title
              h3 {{defaultBankCard.bankName}}
            p {{defaultBankCard.bankCard | fbBankCardSpace}}
    router-link.add-bankcard(:to="{name: 'addBankStep1'}")
      em +
      | 添加银行卡
</template>

<script>
import { bankCards } from '@/common/resources.js'
import { bankMixins } from '@/views/common_mixin.js'
import { RET_CODE_MAP } from '@/constants.js'
import { find } from 'lodash'

export default {
  mixins: [bankMixins],
  async mounted() {
    const data = await bankCards.get().then(res => res.json())
    if (data.code === RET_CODE_MAP.OK) {
      this.defaultBankCard = find(data.data.bankCards, bd => bd.isDefault)
      this.$store.commit('updateBankCardsCount', data.data.bankCards.length)
    }
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

<style lang="scss">
@import '~views/bank/fb-bank-cards.scss';
</style>
