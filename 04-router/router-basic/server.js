const fs = require('fs')
const mime = require('mime')
require('http')
  // .createServer((req,res) => {
  //   let url = req.url
  //   switch (url) {
  //     case '/':
  //       fs.readFile('./index.html', (err,content) => {
  //         res.end(content)
  //       })
  //       break;
  //     case '/home':
  //       fs.readFile('./index.html', (err,content) => {
  //         res.end(content)
  //       })
  //       break;
  //     case '/app.js':
  //       fs.readFile('./app.js', (err,content) => {
  //         res.end(content)
  //       })
  //       break;
  //     case '/11.jpg':
  //       fs.readFile('./11.jpg', (err,content) => {
  //         res.end(content)
  //       })
  //       break;
  //     default:
  //       res.end('page 404')
  //       break;
  //   }
  // })
  .createServer((req, res) => {
    const urlStr = req.url
    if (urlStr === '/favicon.ico') return res.end('1') 
    const type = mime.getType(urlStr.split('.')[1])
    res.writeHead(200, {
      'Content-Type': type
    })
    const file = fs.readFileSync(`./${urlStr}`)
    res.end(file)
  })
  .listen(8080,()=> {
    console.log('服务器8080');
  })