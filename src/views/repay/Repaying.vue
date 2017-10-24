<template lang="pug">
section.repaying.single-page-tip
  header.small-header
    h2
      fb-icon(name="chenggong")
      | 已提交
    p 您的提款请求已提交成功，系统将在<br>半小时内完成还款，感谢您使用极速蜂鸟。
  //- article
    h4 您还可以这样还款
    ul
      li
        | 方式一：更换一张充足余额的银行卡。
        router-link(:to="{name: 'bankList', params: {transitionName: 'slideRightFade'}}")
          mt-button.br2(type="default") 前往
      li 方式二：通过支付宝转账至我们公户fengniaosudai@163.com(请备注姓名+手机号）,转账后在公众号中通知客服。
  //- .footer
    .btns-group
      mt-button.mint-button-block(type='primary', size='large') 关闭
</template>

<script>
</script>

<style lang="scss">
</style>
