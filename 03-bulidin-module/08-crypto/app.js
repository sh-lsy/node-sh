const crypto = require('crypto')

const pwd = 'abc1231'

const hashmd5 = crypto.createHash('md5').update(pwd).digest('hex')
const hashsha1 = crypto.createHash('sha1').update(pwd).digest('hex')
const hashsha256 = crypto.createHash('sha256').update(pwd).digest('hex')

console.log(hashmd5)
console.log(hashsha1)
console.log(hashsha256)