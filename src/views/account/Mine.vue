<template lang="pug">
  .mine-list
    .header
      .flex.ui-border-tb
        .coupon.flex-item.flex.ui-border-r
          i.flex-item.iconfont.icon-youhuiquan.text-right.el-orange
          .flex-item.flex.flex-down.align-start.ml5
            p.flex-item.text-center.el-blue(style="width:3em") 2
            h4.flex-item 优惠券
        .credit.flex-item.flex
          i.flex-item.flex2.iconfont.icon-jifenzhang.text-right.el-green
          .flex-item.flex3.flex.flex-down.align-start.ml5
            p.flex-item.text-center.el-blue(style="width:4em") 2
            h4.flex-item 信用积分
    .group
      mt-cell(title="借款记录", is-link)
        i.iconfont.icon-jiekuanjilu.el-orange(slot="icon")
      mt-cell(title="帮助中心", is-link)
        i.iconfont.icon-bz.el-green(slot="icon")
      mt-cell(title="问题反馈", is-link)
        i.iconfont.icon-wentifankui.el-blue(slot="icon")
    .footer
      .flex
        div.el-light-silver 微信号：demo
</template>

<script>
import { titleUpdater } from '@/common/crossers.js'

export default {
  created() {
    const { user } = this.$store.getters
    titleUpdater.$emit('updatetitle', `${user.phone}`)
  },
  destroyed() {
    titleUpdater.$emit('updatetitle', '')
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: white;
  margin: 15px 0;
  h4 {
    font-weight: normal;
  }
  .iconfont {
    font-size: 30px;
  }
}

.footer {
  margin: 15px 0;
}

.coupon,
.credit {
  padding: 10px 0;
  &:active {
    background: rgba(0, 0, 0, .1);
  }
}
</style>
