<template lang="pug">
  section.credit
    header
      .credit-box
        .now
          h4 当前信用
          p.count {{user.privilegeInfo.creditPoints}}
          span.level Lv.{{user.privilegeInfo.currentLevel}}
        .next
          h4 即将升级
          p.count {{user.privilegeInfo.nextLevelPoints}}
          span.level Lv.{{user.privilegeInfo.nextLevel}}
      p
        | 认证越多，使用越多，信用积分越高
        //- router-link.go-grade(:to="{name: 'creditGrade', params: {transitionName: 'slideRightFade'}}") 信用等级及特权
    .form
      section.base-info
        .fields-header
          | 基础信息
        .fields
          mt-cell(title="手机号", is-link, @click.native="$router.push({name: 'changePhoneStep1', params: {from: $route}})", :value="user.phone")
            i.iconfont.icon-phone(slot="icon")
          mt-cell(title="身份证号", :value="user.idCard | fbCardNo")
            i.iconfont.icon-shenfen(slot="icon")
          mt-cell(title="银行卡", is-link, @click.native="goToBankList()", :value="bankCardsCount | fbAppend('张')")
            i.iconfont.icon-bank-card2(slot="icon")
</template>

<script>
import { mapGetters } from 'vuex'
import { bankCards } from '@/common/resources.js'
import { RET_CODE_MAP } from '@/constants.js'

export default {
  computed: {
    ...mapGetters(['user', 'bankCardsCount'])
  },
  methods: {
    goToBankList() {
      if (this.user.isNew && !this.user.currentOngoingContract) {
        this.$toast('快去借款页借款吧！')
      } else {
        this.$router.push({name: 'bankList'})
      }
    }
  },
  async mounted() {
    if (this.bankCardsCount === 0) {
      const data = await bankCards.get().then(res => res.json())
      if (data.code === RET_CODE_MAP.OK) {
        this.$store.commit('updateBankCardsCount', data.data.bankCards.length)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

header {
  height: 188px;
  background-image: url("~assets/images/credit-header-bg.png"), linear-gradient(135deg, #509ff6 0%, #066fe2 100%);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: hidden;
  color: white;
  text-align: center;
  font-size: $font-size-xxs;
}

.base-info {
  .iconfont {
    color: $font-color-em;
    font-size: $font-size-xxl;
    vertical-align: middle;
    margin-right: 5px;
  }
}

.go-grade {
  padding: 7px;
  margin-left: 17px;
  background-color: #0058b5;
  color: rgba(255, 255, 255, .8);
}

.credit-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  h4 {
    font-weight: normal;
  }
  .count {
    font-size: 45px;
    font-family: franklin;
  }
  .now,
  .next {
    flex: 1;
    text-align: center;
  }
  .now {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: white;
      right: -20px;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: -6px 0 0 rgba(255, 255, 255, .9),
      -12px 0 0 rgba(255, 255, 255, .8),
      -18px 0 0 rgba(255, 255, 255, .7),
      -24px 0 0 rgba(255, 255, 255, .6),
      -30px 0 0 rgba(255, 255, 255, .5),
      -36px 0 0 rgba(255, 255, 255, .4),
      -42px 0 0 rgba(255, 255, 255, .3),
      -48px 0 0 rgba(255, 255, 255, .2),
      -54px 0 0 rgba(255, 255, 255, .1);
    }
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-width: 8px 12px;
      border-style: solid;
      border-color: transparent transparent transparent white;
      right: -47px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .level {
    background: white;
    display: inline-block;
    color: $el-yellow;
    padding: 0px 5px;
    border-radius: 100px;
    transform: scale(0.9);
  }
}
</style>
