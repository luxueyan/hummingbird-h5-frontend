<template lang="pug">
  .fb-bank-cards
    .cells
      mt-cell(v-for="bankCard in bankCards", :key="bankCard.id", is-link, @click.native="goToDetail(bankCard.id)")
        div(slot="title")
          .content
            .content-icon
              fb-icon(:name="getBankIcon(bankCard.bankName)")
            .content-body
              .title
                h3 {{bankCard.bankName}}
              p {{bankCard.bankCard}}
          label.mint-radiolist-label(@click.stop="")
            span.mint-radio
              input.mint-radio-input(type='radio', :value="bankCard.id", v-model="defaultBankCardId")
              span.mint-radio-core
            span.mint-radio-label 设为默认
    router-link.add-bankcard(:to="{name: 'addBankStep1', params: {transitionName: 'slideRightFade'}}")
      em +
      | 添加银行卡
</template>

<script>
import { bankCards, bankCardDefault } from '@/common/resources.js'
import { find } from 'lodash'
import { bankMixins } from '@/views/common_mixin.js'
import { RET_CODE_MAP } from '@/constants.js'

export default {
  mixins: [bankMixins],
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

  mounted() {
    this.$store.commit('updateBankCardsCount', this.bankCards.length)
    this.$nextTick(() => {
      this.$watch('defaultBankCardId', (newValue, oldValue) => {
        if (!oldValue) return
        bankCardDefault
          .save({ id: this.defaultBankCardId })
          .then(res => res.json())
          .then(data => {
            if (data.code === RET_CODE_MAP.OK) {
              this.$toast('默认银行卡变更成功！')
              if (this.$route.params.from) {
                this.$router.push(Object.assign({}, this.$route.params.from))
              }
            }
          })
      })
    })
  },

  // watch: {
  //   defaultBankCardId(newValue, oldValue) {
  //     bankCardDefault
  //       .save({ id: this.defaultBankCardId })
  //       .then(res => res.json())
  //       .then(data => {
  //         if (data.code === RET_CODE_MAP.OK) {
  //           this.$toast('默认银行卡变更成功！')
  //           if (this.$route.params.from) {
  //             this.$router.push(Object.assign({}, this.$route.params.from))
  //           }
  //         }
  //       })
  //   }
  // },

  data() {
    return {
      defaultBankCardId: '',
      bankCards: []
    }
  }
}
</script>

<style lang="scss" src="@/views/bank/fb-bank-cards.scss"></style>
<style lang="scss" scoped>
.fb-bank-cards {
  padding-top: 10px;
}
</style>
