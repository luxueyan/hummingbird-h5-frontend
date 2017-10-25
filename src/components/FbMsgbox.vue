<template lang="pug">
  .mint-msgbox-wrapper(:class="msgboxClass", v-show="visible", :style="style")
    transition(name='msgbox')
      .mint-msgbox(v-show="transitionVisible")
        .mint-msgbox-header
          .mint-msgbox-title
            slot(name="title")
              | {{title}}
        .mint-msgbox-content
          .mint-msgbox-message
            slot
          //- .mint-msgbox-input(style='display: none;')
            input(placeholder='' type='text')
            .mint-msgbox-errormsg(style='visibility: hidden;')
        .mint-msgbox-btns
          .mint-msgbox-btn.mint-msgbox-cancel(v-if="showCancelButton", @click="close('cancel')")
            slot(name="cancelButtonContent")
              | 取消
          .mint-msgbox-btn.mint-msgbox-confirm(@click="close('confirm')")
            slot(name="confirmButtonContent")
              | 确定

</template>

<script>
const modelId = Math.random().toString(32).slice(2)

export default {
  name: 'fb-msgbox',
  props: {
    showCancelButton: true,
    msgboxClass: '',
    title: ''
  },
  methods: {
    open(callback) {
      this.visible = true
      const popupModal = document.createElement('div')
      popupModal.addEventListener('touchstart', e => {
        e.stopPropagation()
        e.preventDefault()
        return false
      })
      popupModal.classList.add('v-modal', 'fb-model-' + modelId)
      popupModal.style.zIndex = 2000
      this.style.zIndex = 2001
      document.body.appendChild(popupModal)
      this.$nextTick(() => {
        this.transitionVisible = true
      })
      if (callback) this.$on('msgbox-close', callback)
    },
    close(action) {
      this.transitionVisible = false
      this.$nextTick(() => {
        let popupModal = document.querySelector('.fb-model-' + modelId)
        if (popupModal) document.body.removeChild(popupModal)
        this.$emit('msgbox-close', action)
        setTimeout(() => {
          this.visible = false
        }, 300)
      })
    }
  },
  data() {
    return {
      visible: false,
      transitionVisible: false,
      style: {
        position: 'absolute',
        zIndex: 2001
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
$blue-color: #479bf5;
.custom-msgbox {
  &.success-msgbox {
    .mint-msgbox-header {
      height: 250px;
      position: relative;
      margin-left: -50%;
      width: 200%;
      margin-top: -125px;
      background-image: url("~assets/images/icon-success.png"), linear-gradient(135deg, #5fa7f4 0%, #1c83f2 100%);
      background-position: center 150px, left top;
      background-size: 143px, contain;
      border-radius: 0 0 1000px 1000px;
    }
  }
  .mint-msgbox-header {
    height: 125px;
    background-image: url("~assets/images/wave-shim.jpg"), url("~assets/images/icon-error.png");
    background-position: center bottom, center 40%;
    background-repeat: no-repeat;
    background-size: contain, 104px;
    background-color: $blue-color;
  }
  .mint-msgbox-content {
    border-bottom: 0;
    line-height: 1.8em;
    h3 {
      font-size: 18px;
      margin-bottom: 15px;
    }
    p {
      color: $minor-font-color;
      font-size: $font-size-xs;
    }
  }
  .mint-msgbox {
    border-radius: 5px;
  }
  .mint-msgbox-btns {
    height: auto;
  }
  .mint-msgbox-confirm {
    color: white;
    border-radius: 100px;
    background-color: $blue-color;
    margin: 15px 35px;
    height: 42px;
    line-height: 42px;
    &:active {
      background-color: darken($blue-color, 5%);
    }
  }
}

.msgbox-enter {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.7);
}

.msgbox-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.9);
}

.mint-msgbox {
  .mint-msgbox-btns {
    text-align: center;
  }
}
</style>
