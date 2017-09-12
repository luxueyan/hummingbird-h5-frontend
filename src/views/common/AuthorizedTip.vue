<template lang="pug">
section.authorized-tip.single-page-tip
  .logo
    i.iconfont.icon-xiao
    h3 欢迎您，特权用户
      em {{user.userCall}}
  article
    p 您已获得
      em {{user.integraluserlevel.Limit | fbCurrency('', '元')}}
      | 速贷特权
    p 点击下一步，立刻领取
  .footer
    mt-button.mint-button-block(type='primary', size='large', @click='getMoney()') 立刻领取
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex'
import {
  CUST_STATE_CODE_MAP
} from '@/constants.js'

export default {
  computed: {
    ...mapGetters(['user'])
  },

  methods: {
    ...mapMutations(['updateStateCode']),
    getMoney() {
      this.updateStateCode(CUST_STATE_CODE_MAP.DEBT_SETTELED)
      this.$router.push({
        name: 'borrowerInfo'
      })
    }
  }
}
</script>

<style lang="scss">
.authorized-tip {}
</style>
