<template lang="pug">
  .bank-cards
    .cells
      mt-cell(v-for="bankCard in bankCards", :key="bankCard.id", is-link, @click.native="goToDetail(bankCard.id)")
        .content(slot="title")
          .title
            h3 {{bankCard.bankName}}
          p {{bankCard.bankCard}}
          label.mint-radiolist-label(@click.stop="")
            span.mint-radio
              input.mint-radio-input(type='radio', :value="bankCard.id", v-model="defaultBankCardId")
              span.mint-radio-core
            span.mint-radio-label 设为默认
    router-link.add-bankcard(:to="{name: 'addBankStep1', params: {transitionName: 'slideRightFade'}}") + 添加银行卡
</template>

<script>
import { bankCards, bankCardDefault } from '@/common/resources.js'
import { find } from 'lodash'

export default {
  async beforeRouteEnter(to, from, next) {
    const data = await bankCards.get().then(res => res.json())
    next(vm => {
      if (data.data) {
        vm.bankCards = data.data.bankCards || []
        const defaultBankCard = find(vm.bankCards, bd => bd.isDefault)
        vm.defaultBankCardId = defaultBankCard.id
      }
    })
  },

  methods: {
    goToDetail(bankCardId) {
      this.$router.push({
        name: 'bankDetail',
        params: {
          id: bankCardId
        }
      })
    }
  },

  watch: {
    defaultBankCardId() {
      bankCardDefault.save({ id: this.defaultBankCardId })
    }
  },

  data() {
    return {
      defaultBankCardId: '',
      bankCards: []
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';
.bank-cards {
  margin-top: 10px;
  .add-bankcard {
    padding: 12px 10px;
    text-align: center;
    background: white;
    display: block;
    &:active {
      background: rgba(0, 0, 0, .1);
    }
  }
  .mint-cell-mask {
    display: none;
  }
  .mint-cell-title {
    display: flex;
    align-items: center;
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
