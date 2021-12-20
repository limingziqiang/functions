// 发布时动态修改 manifest.json

const fs = require('fs')

const manifestPath = './src/manifest.json'
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' })
function replaceManifest(path, value) {
  const arr = path.split('.')
  const len = arr.length
  const lastItem = arr[len - 1]

  let i = 0
  let ManifestArr = Manifest.split(/\n/)

  for (let index = 0; index < ManifestArr.length; index++) {
    const item = ManifestArr[index]
    if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
    if (i === len) {
      const hasComma = /,/.test(item)
      ManifestArr[index] = item.replace(new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`), `"${lastItem}": ${value}${hasComma ? ',' : ''}`)
      break;
    }
  }

  Manifest = ManifestArr.join('\n')
}
// 使用
replaceManifest('app-plus.usingComponents', false)
replaceManifest('app-plus.splashscreen.alwaysShowBeforeRender', false)
replaceManifest('mp-baidu.usingComponents', false)
fs.writeFileSync(manifestPath, Manifest, {
  "flag": "w"
})

module.exports = {
    // ...
}
