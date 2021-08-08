const logger = require('../utils/log')

const querystring = require('querystring')

const query = 'id=2&name=sky&from=成都'
const query2 = 'id:2/name:sky/from:成都'
const queryescape = 'id%3A2%2Fname%3Asky%2Ffrom%3A%E6%88%90%E9%83%BD'
const queryobj = { id: '2', name: 'sky', from: '成都' }

logger.debug(querystring.parse(query))
logger.debug(querystring.escape(query2))
logger.debug(querystring.unescape(queryescape))
logger.debug(querystring.stringify(queryobj,';', ':'))
logger.debug(querystring.parse(query2,'/', ':'))

const newquery = querystring.stringify(queryobj,';', ':', {
  encodeURIComponent(string) {
    return querystring.unescape(string)
  }
})

logger.debug(newquery)