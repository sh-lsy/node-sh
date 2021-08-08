const http = require('http')
const https = require('https')
const cheerio = require('cheerio')
const logger = require('../../utils/log')

function filterData(data) {
  const $ = cheerio.load(data)
  // console.log(data)
  $('.section-item-box p').each((index, val) => {
    // console.log($(val).text());
    logger.debug($(val).text())
  })
}

const server = http.createServer((req,res) => {
  let data = ''
  https.get('https://www.meizu.com/', (result) => {
    result.on('data', (v) => {
      data += v
    })
    result.on('end', () => {
      filterData(data)
    })
  })
})

server.listen(8090, () => {
  console.log('服务启动8090端口');
})