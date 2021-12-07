export class Enum {
  constructor(args) {
    const obj = {}
    if (Object.prototype.toString.call(args).slice(8, -1) === 'Object') {
      Object.entries(args).forEach(([k, v]) => (obj[(obj[k] = v)] = k))
    } else if (Array.isArray(args)) {
      args.forEach((v, index) => (obj[(obj[v] = index)] = v))
    } else {
      throw new TypeError('class Enum should receive a plain object or a array')
    }
    return obj
  }
}
