const fs = require('fs')

// 覆盖写入
fs.writeFile('./data/data1.txt', '新建11', function (err, data) {
	console.log(err)
	console.log('data', data)
})
