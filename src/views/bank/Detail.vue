<template lang="pug">
section.bank-detail.single-page-tip
  .cells
    mt-cell(title="姓名", :value="model.name")
    mt-cell(title="卡号", :value="model.bankCard")
    mt-cell(title="开户行", :value="model.bankName")
    mt-cell(title="手机号",
    :value="model.bankReservePhone",
    is-link, @click.native="changeBankPhone()")
  .remove-bind(@click='deleteBankCard()', v-show="model.bankCard")
    | 解除绑定
  //- .footer
    mt-button.mint-button-block(type='primary', size='large', @click='deleteBankCard()') 解除绑定
</template>

<script>
import { RET_CODE_MAP } from '@/constants.js'
import { merge } from 'lodash'
import { bankCards, bankCardDelete } from '@/common/resources.js'

export default {
  async beforeRouteEnter(to, from, next) {
    const data = await bankCards.get({ id: to.params.id }).then(res => res.json())
    next(vm => {
      if (data.code === RET_CODE_MAP.OK) {
        merge(vm.model, data.data)
      }
    })
  },

  methods: {
    changeBankPhone() {
      this.$router.push({
        name: 'changeBankPhoneStep1',
        params: {
          bankCardId: this.model.id,
          from: this.$route
        }
      })
    },

    async deleteBankCard() {
      const bankCardsCount = this.$store.getters.bankCardsCount
      if (this.model.bankCard && bankCardsCount === 1) {
        const action = await this.$msgBox({
          title: '提示',
          message: '您无法解绑唯一的卡片，请先添加一张新的银行卡。',
          confirmButtonText: '前往添加',
          showCancelButton: true
        }).catch(action => action)

        if (action === 'confirm') {
          this.$router.push({
            name: 'addBankStep1',
            params: {
              from: this.$route
            }
          })
        }
        return
      }

      const action = await this.$msgBox.confirm('您确认解除绑定该银行卡吗？').catch(action => action)
      if (action === 'confirm') {
        const data = await bankCardDelete.save({ id: this.model.id }).then(res => res.json())
        if (data.code === RET_CODE_MAP.OK) {
          this.$toast('成功解除绑定！', 'success')
          this.routerBack()
        }
      }
    }
  },

  data() {
    return {
      model: {
        name: this.$store.getters.user.name,
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
.bank-detail {
  padding-top: 10px;
  .cells-title {
    padding: 10px;
  }
  .remove-bind {
    font-size: $font-size-m;
    height: 45px;
    line-height: 45px;
    margin-top: 15px;
    background: white;
    padding: 0 15px;
    &:active {
      background: rgba(0, 0, 0, .01);
    }
  }
}
</style>
