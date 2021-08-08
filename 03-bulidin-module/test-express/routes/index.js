var express = require('express');
const logger = require('../../utils/log')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data', (req,res, next) => {
  logger.debug(req.body)
  res.send('ok')
})
module.exports = router;
