export default {
  install(Vue, options) {
    // 让 mint-ui field 支持blur事件
    Vue.directive('mt-field-blur', {
      bind(el, binding) {
        el.querySelector('input').addEventListener('blur', binding.value.blur)
      },
      unbind(el, binding) {
        el.querySelector('input').removeEventListener('blur', binding.value.blur)
      }
    })
  }
}
