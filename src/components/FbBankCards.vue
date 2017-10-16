<template lang="pug">
section.fb-bank-cards
  .fields-header
    | 银行账户
    //- small
      i.iconfont.icon-ku
      | 请填写您的真实信息，否则会影响借款。
  .fields
    .cells
      mt-cell(is-link, @click.native="$router.push({name: 'bankList'})")
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
  async mounted() {
    const data = await bankCards.get().then(res => res.json())
    if (data.code === RET_CODE_MAP.OK) {
      this.defaultBankCard = find(data.data.bankCards, bd => bd.isDefault)
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
@import '~assets/scss/_variables.scss';

.fb-bank-cards {
  .add-bankcard {
    padding: 12px 10px;
    text-align: center;
    background: white;
    display: block;
    &:active {
      background: rgba(0, 0, 0, .1);
    }
  }
  .title {
    display: flex;
    align-items: center;
  }
  .content {
    line-height: 1.8em;
    h3 {
      flex: 1;
      font-size: 16px;
      font-weight: normal;
    }
    font-size: 14px;
    overflow: hidden;
    padding: 10px 0;
    p {
      overflow: hidden;
      text-overflow: ellipsis; // padding-left: 11px;
      color: $gray-color;
    }
  }
}
</style>
