<template lang="pug">
section.bank-detail.single-page-tip
  .cells
    mt-cell(title="姓名", :value="model.name")
    mt-cell(title="卡号", :value="model.bankCard")
    mt-cell(title="开户行", :value="model.bankName")
    mt-cell(title="手机号",
    :value="model.bankReservePhone",
    is-link, @click.native="changeBankPhone()")
  .footer
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
          from: this.$route.name
        }
      })
    },

    async deleteBankCard() {
      const action = await this.$msgBox.confirm('确认解除绑定银行卡吗?')
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
.bank-detail {
  .cells-title {
    padding: 10px;
  }
}
</style>
