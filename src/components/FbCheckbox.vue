<template lang="pug">
  label.fb-checkbox
    input(type="checkbox", v-model="currentValue")
    span.checkbox-label
      slot
    span.mint-field-state(:class="stateClass")
      i.mintui(:class="fieldStateClass")

</template>

<script>
export default {
  name: 'fb-checkbox',
  props: {
    value: '',
    state: ''
  },

  computed: {
    stateClass() {
      if (this.state) {
        return `is-${this.state}`
      }
      return ''
    },
    fieldStateClass() {
      if (this.state) {
        return `mintui-field-${this.state}`
      }
      return ''
    }
  },

  watch: {
    value(val) {
      this.currentValue = val
    },

    currentValue(val) {
      this.$emit('input', val)
    }
  },

  data() {
    return {
      currentValue: this.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
.fb-checkbox {
  font-size: inherit;
  .mint-field-state .mintui {
    vertical-align: -2px;
  }
  .checkbox-label:before {
    color: $primary-color;
    content: '\e625';
    font-family: 'iconfont';
    font-size: $font-size-m;
  }
  a {
    color: $primary-color;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked+.checkbox-label:before {
    content: '\e624';
  }
}
</style>
