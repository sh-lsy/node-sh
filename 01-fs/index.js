const fs = require('fs')

fs.writeFile('./test.txt', '测试', (err, data) => {
  if (err) {

  } else {
    console.log('创建成功');
  }
})