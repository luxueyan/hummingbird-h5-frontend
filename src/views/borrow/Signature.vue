<template lang="pug">
  #panel(:style="panelStyle")
</template>

<script>
import EPaper from '@/common/epaper.js'
import {
  contractSign,
  contractReset
} from '@/common/resources.js'
import {
  mapGetters,
  mapMutations
} from 'vuex'
import {
  RET_CODE_MAP,
  CUST_STATE_CODE_MAP
} from '@/constants.js'
import borrowMixins from '@/views/borrow/borrow_mixins.js'

export default {
  mixins: [borrowMixins],
  mounted() {
    const myepaper = EPaper.init('panel', {
      name: this.user.name
    })

    myepaper.setCallback(async(pngData, pointsData, isCancel) => {
      if (!isCancel) {
        if (!pngData) {
          this.$toast(`请手写您的姓名：${this.user.name}`, 'error')
          return
        }

        const data = await contractSign.save({
          sign: pngData
        }).then(res => res.json())

        if (data.code === RET_CODE_MAP.OK) {
          this.drawMoney() // 新版接口不需要主动请求放款，未来可能删除
        }
      } else {
        const data = await contractReset.get().then(res => res.json())
        if (data.code === RET_CODE_MAP.OK) {
          this.updateStateCode(CUST_STATE_CODE_MAP.DEBT_SETTELED)
          this.$router.push({
            name: 'borrowerInfo'
          })
        }
        // this.$toast('请签署合同', 'error')
      }
    })
  },

  methods: {
    ...mapMutations(['updateStateCode'])
  },

  computed: {
    ...mapGetters(['user'])
  },

  data() {
    return {
      panelStyle: {
        height: window.innerHeight + 'px' // 初始化一下panel的高度，否则epaper初始化时取其高度导致canvas初始高度有问题
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/epaper.scss';
#panel {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 0;
  background-color: #fff;
  .ePaperCanvas {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: block;
  }
}
</style>
