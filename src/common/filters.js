import { isNumber, round, isNull, isNil } from 'lodash'
import moment from 'moment'
import numeral from 'numeral'

export default {
  install(Vue, options) {
    Vue.filter('fbCurrency', (value, prefix = '￥', suffix = '') => {
      if (isNumber(value)) {
        return prefix + numeral(round(value, 2)).format('0,0.00') + suffix
      } else {
        return value
      }
    })

    Vue.filter('fbFlow', (value) => {
      if (value > 0) {
        return value
      } else {
        return -(value)
      }
    })

    Vue.filter('fbPercent', (value, decimal = 2, multi = 100, unit = '%') => {
      return isNumber(value) ? round(value * multi, decimal).toFixed(decimal) + (unit || '') : ''
    })

    Vue.filter('fbRangePercent', (value, value2, decimal = 2) => {
      value = isNumber(value) ? round(value, decimal).toFixed(decimal) : ''
      value2 = isNumber(value2) ? round(value2, decimal).toFixed(decimal) : ''
      if (value === value2) {
        return value + '%'
      }

      return `${value}-${value2}%`
    })

    Vue.filter('fbRound', (value, decimal = 0) => {
      return round(value, decimal).toFixed(2)
    })

    Vue.filter('fbAppend', (value, str) => {
      return (isNil(value) ? '' : value) + str
    })

    Vue.filter('fbPrepend', (value, str) => {
      return str + (isNil(value) ? '' : value)
    })

    Vue.filter('fbPositveNumber', (value) => {
      if (value > 0 && isNumber(value)) {
        return '+' + value
      }
      return value
    })

    Vue.filter('fbNull', (value, str) => {
      return isNull(value) ? '-' : (str || value)
    })

    Vue.filter('fbFalse', (value, str) => {
      return !value ? '-' : (str || value)
    })

    Vue.filter('fbCardNo', (value) => {
      return value ? value.replace(/(\d{4})\d+(\d{4})/g, '$1****$2') : '-'
    })

    Vue.filter('moment', (date, format) => {
      return moment(date).format(format)
    })
  }
}
