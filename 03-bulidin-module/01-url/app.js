const url = require('url')
const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
logger.level = "debug";
const urlString = "https://www.baidu.com:443/path/index.html?id=2#tag=3"
// url.parse('https://www.baidu.com:443/path/index.html?id=2#tag=3') // 弃用
// console.log(url.parse(urlString))
// const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
const myURL = new URL(urlString);
// https://sub.host.com:8080/p/a/t/h?query=string#hash
const urlparse = {
  href: 'https://www.baidu.com/path/index.html?id=2#tag=3',
  origin: 'https://www.baidu.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.baidu.com',
  hostname: 'www.baidu.com',
  port: '',
  pathname: '/path/index.html',
  search: '?id=2',
  // searchParams: URLSearchParams { 'id' => '2' },
  hash: '#tag=3'
}
logger.debug(myURL)
logger.debug(url.format(urlparse,{ fragment: false, unicode: true, auth: false }))

logger.debug(url.resolve('http://example.com/one', '/two'))

// URLSearchParams

const newurl = new URLSearchParams(myURL.search)

logger.debug(newurl)
logger.debug(newurl.get('id'))