<template lang="pug">
section.authorized-tip
  header
    h2 恭喜您<br>获得
      em {{user.productInfo[0].amount}}元
      | 免审核额度！
    img(src="~assets/images/authorized-bg.jpg")
  .body
    mt-button.mint-button-block(type='danger', size='large', @click='getMoney()') 开始借款
  .footer
    h3 借贷流程
    .borrow-flow
      .flow-item
        .iconfont.icon-identity
        p 1.填写身份信息
      .flow-item
        .iconfont.icon-cards
        p 2.绑定银行卡
      .flow-item
        .iconfont.icon-wait
        p 3.一分钟到账
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

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
header {
  position: relative;
  h2 {
    text-align: center;
    position: absolute;
    font-size: 26px;
    color: white;
    top: 25px;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
  }
  em {
    color: #ffcc00;
    font-style: normal;
  }
  img {
    width: 100%;
  }
}

.mint-button-block {
  width: 264px;
  margin: 50px auto;
  border-radius: 0;
  overflow: visible;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    border: 1px solid $el-red;
    left: -8px;
    top: 8px;
    transform-origin: 0 0;
    transform: scale(0.5);
  }
}

.footer {
  text-align: center;
  h3 {
    margin-bottom: 25px;
    font-size: $font-size-xl;
  }
  .borrow-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px 20px;
  }
  .flow-item {
    flex: 1;
    font-size: $font-size-xs;
    position: relative;
    &:not(:last-child):after {
      font-family: iconfont;
      content: '\e652';
      position: absolute;
      top: 18px;
      transform: translateX(50%);
      right: 0;
      color: $font-color-em;
      font-size: $font-size-xl;
    }
  }
  .iconfont {
    display: inline-block;
    border-radius: 50%;
    margin-bottom: 12px;
    color: white;
    padding: 13px;
    background: $font-color-em;
    font-size: 21px;
  }
}
</style>
