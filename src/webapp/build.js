const fs = require('fs')
const path = require('path')

const buildDir = path.resolve(__dirname, './build')

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir)
}

fs.writeFileSync(path.join(buildDir, './index.html'), 'Hello world!', { flag: 'a+' })

console.log('Job done!', buildDir)