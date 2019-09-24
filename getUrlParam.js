/**
 * 获取URL中的某参数值,不区分大小写
 * 获取URL中的某参数值,不区分大小写,
 * 默认是取'hash'里的参数，
 * 如果传其他参数支持取‘search’中的参数
 * @param {String} name 参数名称
 */
export function getUrlParam(name, type = 'hash') {
  let newName = name,
      reg = new RegExp('(^|&)' + newName + '=([^&]*)(&|$)', 'i'),
      paramHash = window.location.hash.split('?')[1] || '',
      paramSearch = window.location.search.split('?')[1] || '',
      param;
    
  type === 'hash' ? (param = paramHash) : (param = paramSearch)

  let result = param.match(reg)

  if (result != null) {
    return result[2].split('/')[0]
  }
  return null
}
