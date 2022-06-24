// path.basename  获取路径文件名
// path.extname  获取路径后缀名

const path = require('path')

const fullName = path.basename(path.join(__dirname, '../01-fs/data/data.txt'))
const name = path.basename(path.join(__dirname, '../01-fs/data/data.txt'), 'txt')

console.log('🚀 ~ file: 02.js ~ line 4 ~ name', fullName)
console.log('🚀 ~ file: 02.js ~ line 4 ~ name', name)

const ext = path.extname(path.join(__dirname, './01-fs/data/data.txt'))
console.log('🚀 ~ file: 02.js ~ line 13 ~ ext', ext)
