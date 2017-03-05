<template lang="pug">
  #panel

</template>

<script>
import EPaper from '../../common/epaper.js'

export default {
  /* beautify ignore:start */
  mounted() {
    const myepaper = EPaper.init('panel')
    myepaper.setCallback((pngData, pointsData, isCancel) => {
      console.log(pngData, pointsData, isCancel)
    })
  },
  /* beautify ignore:end */
  methods: {
    confirmSignature(pngData, pointsData, isCancel) {
      console.log(pngData, pointsData, isCancel)
    }
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
