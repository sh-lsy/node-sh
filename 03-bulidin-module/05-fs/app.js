const fs = require('fs')
const fsPromises = fs.promises

// fs.mkdir('./目录1/目录2/目录3', { recursive: true }, (err) => {
//   if (err) throw err;
//   console.log('创建成功');
// });

// 创建文件夹
// fs.mkdir('./logs',(err) => {
//   if(err) throw err
//   console.log('创建成功')
// })

// 文件夹改名
// fs.rename('./logs', './gai', ()=> {
//   console.log('修改成功')
// })

// 删除文件夹s
// fs.rmdir('./logs', () => {
//   console.log('done.')
// })

// 读取文件夹

// fs.readdir('../05-fs',(err,result) => {
//   console.log(result)
// })
// 创建文件
// fs.writeFile('./logs/log.log', 'hello\nworld', err => {
//   console.log('done')
// })

// 文件追加内容
// fs.appendFile('./logs/log.log', '!!!哈哈', err => {
//   console.log('done')
// })

// 删除文件
// fs.unlink('./logs/log.log', err => {
//   console.log('done')
// })

// 读取文件
// 不加 utf-8 则显示数据流 buffer
// fs.readFile('./logs/log.log', 'utf-8', (err, result) => {
//   console.log(result)
// })
// 或者
// fs.readFile('./logs/log.log', (err, result) => {
//   console.log(result.toString())
// })
// 同步操作
// ;(async()=> {
//   let result = await fsPromises.readFile('./logs/log.log')
//   console.log(result.toString())
// })()

  // fsPromises.readFile('./logs/log.log')
  // .then(res => res)
  // .then(res => {
  //   console.log(res.toString())
  // })
  // .catch(err => {
  //   console.log(err)
  // })

  // 批量写文件
// for (var i = 0; i < 10; i++) {
//   fs.writeFile(`./logs/log-${i}.txt`, `log-${i}`, (err) => {
//     console.log('done.')
//   })
// }
// 读取文件/目录信息
// fs.readdir('./', (err, data) => {
//   data.forEach((value, index) => {
//     fs.stat(`./${value}`, (err, stats) => {
//       // console.log(value + ':' + stats.size)
//       console.log(value + ' is ' + (stats.isDirectory() ? 'directory' : 'file'))
//     })
//   })
// })

// 读取目录文件方法

function readDir(dir) {
  fs.readdir(dir, (err, data) => {
    data.forEach(val => {
      let dirAll = `${dir}/${val}`
      fs.stat(dirAll, (err, stats) => {
        if (stats.isDirectory()) {
          readDir(dirAll)
        } else {
          fs.readFile(dirAll, 'utf-8', (err,content) => {
            console.log(content)
          })
        }
      })
    })
  })
}
readDir('./')
// watch 监测文件变化 filename 将是一个 Buffer，否则 filename 将是 UTF-8 字符串。
// fs.watch('./logs/log-0.txt', { encoding: 'UTF-8' },(eventType,filename) => {
//   if (filename) {
//     console.log(filename)
//   }
// })