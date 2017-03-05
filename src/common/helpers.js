import { cloneDeep, isNull, each, isPlainObject } from 'lodash'

// 清理无用参数
export function pruneParams(params, visible) {
  var newParams = cloneDeep(params)
  each(newParams, (v, i) => {
    if (newParams[i] === '' || isNull(newParams[i]) || (isPlainObject(visible) && visible[i] === false)) {
      delete newParams[i]
    }
  })
  return newParams
}
