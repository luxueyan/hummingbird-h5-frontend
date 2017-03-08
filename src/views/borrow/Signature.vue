<template lang="pug">
  #panel
</template>

<script>
import EPaper from '../../common/epaper.js'
import {
  SetAgreementSign
} from '../../common/resources.js'
import {
  mapGetters
} from 'vuex'
import {
  RET_CODE_MAP
} from '../../constants.js'
import borrowMixins from './borrow_mixins.js'

export default {
  mixins: [borrowMixins],
  mounted: function() {
    const myepaper = EPaper.init('panel', {
      name: this.user.UserinfoValLogin.Name
    })

    myepaper.setCallback((pngData, pointsData, isCancel) => {
      if (!isCancel) {
        if (!pngData) {
          this.$root.toast(`请手写您的姓${this.user.UserinfoValLogin.Name}名：`, 'error')
          return
        }
        SetAgreementSign
          .save({
            sign: pngData
          })
          .then(res => res.json())
          .then(data => {
            if (data.ret === RET_CODE_MAP.OK) {
              this.drawMoney()
            }
          })
      }
    })
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/epaper.scss';
#panel {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 0;
  background-color: #fff;
}
</style>
