const fs = require('fs')

fs.readFile('./data/data.txt', 'utf8', function (err: any, data: any) {
	console.log(err)
	console.log('🚀 ~ file: 01readFile.ts ~ line 5 ~ data', data)
})
