// isFunction：检查 value 是不是函数
const  isFunction = value => {
  return Object.prototype.toString.call(value) === '[object Function]'
}

// isLength：检查 value 是否为有效的类数组长度
const  isLength = value => {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER;
}

// isArrayLike：检查 value 是否是类数组
export default const isArrayLike = (value) => {
  return value != null && isLength(value.length) && !isFunction(value)
}
