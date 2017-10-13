<template lang="pug">
section.change-bank-card-step3.single-page-tip
  .logo
    i.iconfont.icon-ku
    h3
      | 第
      em {{err.errCount}}
      | 次失败
  article.text-left
    p
      | 您的
      em {{err.bankName}}({{err.bankCard | fbCardNo}})
      | 因
      em {{err.lastErrMsg | errMsgPrune}}
      | 还款失败。
    p(v-if="err.errCount < 3")
      | 您今日内还可以提交
      em {{3 - err.errCount}}
      | 次还款请求，请确保卡内余额充足。
    p(v-if="err.errCount >= 3")
      | 由于您尝试次数过多（超过3次），该银行卡今日已不能提交还款请求。
    h4 您可以通过以下方式还款：
    ul
      li
        | 一、通过点击
        em 我要更换信息
        | 更换一张余额充足的银行卡，更改成功后点击
        em 重试
        |；
      li 二、线下转账至我们支付宝公户：fengniaosudai@163.com【北京极速蜂鸟科技有限公司】（请备注姓名+手机号），转账后公众号中联系客服为您操作合同状态。
  .footer.no-padding-top
    //- .simple-btns
      a.large(@click="showCommonFailedReasons()") 常见失败原因
      //- a.large(@click="repay()") 重试
    .btns-group
      mt-button.mint-button-block(type='default', size='large', @click="$router.push({name: 'changeBankCardStep1'})") 我要更换信息
      mt-button.mint-button-block(type='primary', size='large', @click="repay()") 重试
</template>

<script>
import {
  mapGetters
} from 'vuex'
import { repaymentError } from '@/common/resources.js'
import repayMixins from '@/views/repay/repay_mixins.js'

export default {
  mixins: [repayMixins],
  computed: {
    ...mapGetters(['stateMsg'])
  },

  beforeRouteEnter(to, from, next) {
    repaymentError.get().then(res => res.json())
      .then(data => {
        next(vm => {
          vm.err = data.data
        })
      })
  },

  filters: {
    errMsgPrune(val) {
      return val ? val.replace(/\[[^]]*\]/g, '') : ''
    }
  },

  methods: {
    showCommonFailedReasons() {
      this.$msgBox({
        title: '常见失败原因',
        message: `<ol>
          <li>账户余额是否充足</li>
          <li>银行卡号是否正确</li>
          <li>银行预留手机号是否正确</li>
        </ol>`,
        confirmButtonText: '我知道了'
      })
    }
  },

  data() {
    return {
      err: {}
    }
  }
}
</script>

<style lang="scss" scoped>
em {
  margin: 0 .3em;
}

h4 {
  margin: .5em 0;
}

.text-left {
  text-align: left;
  padding: 0 10px;
}

.btns-group {
  margin-top: 15px;
}
</style>
