export default const fnParams2Url = obj=> {
      let aUrl = []
      let fnAdd = function(key, value) {
        return key + '=' + value
      }
      for (var k in obj) {
        aUrl.push(fnAdd(k, obj[k]))
      }
      return encodeURIComponent(aUrl.join('&'))
 }
