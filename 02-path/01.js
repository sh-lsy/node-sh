const path = require('path')
const fs = require('fs')

fs.readFile(path.join(__dirname, '../01-fs/data/data.txt'), 'utf8', (err, data) => {
	console.log('🚀 ~ file: 01.js ~ line 6 ~ fs.readFile ~ data', data)
})
