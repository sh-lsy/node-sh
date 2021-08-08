const fs = require('fs')

const stream = require('stream')
const zlib = require('zlib')

const gzip = zlib.createGzip()

const readStream = fs.createReadStream('./log.log')
const writeStream = fs.createWriteStream('./log2.log.zip')

readStream.pipe(gzip).pipe(writeStream)

// writeStream.write(readStream)