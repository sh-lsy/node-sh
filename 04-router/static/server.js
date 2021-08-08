const path = require('path')
const fs = require('fs')
const readStaticFile = require('./readStaticFile')

require('http')
  .createServer((req,res) => {
    const urlStr = req.url
    if(urlStr === '/') {
      fs.readFile('./public/index.html', (err,content) => {
        res.end(content)
      })
      return
    }
    const fileName = path.join(__dirname, './public', urlStr)
    readStaticFile(fileName, res)
  })
  .listen(8080, () => {
    console.log('服务启动8080')
  })