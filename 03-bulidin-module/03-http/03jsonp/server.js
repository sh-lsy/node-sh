const http = require('http')
const logger = require('../../utils/log')
const server = http.createServer((req,res) => {
  const urlObj = new URL(req.url, req.headers.referer) // WHATWG 的 URL 接口
  let fn = urlObj.searchParams.get('cb')
  // logger.debug(urlObj);
  switch (urlObj.pathname) {
    case '/api/data':
      // res.write('hello')
      res.write(`${fn}("hello1111")`)
      break;
    default:
      res.write('404,not found')
      break;
  }
  res.end()
})

server.listen(8080, () => {
  console.log('服务启动')
})