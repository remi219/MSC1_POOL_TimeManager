var express = require('express');
var router = express.Router();
let cors = require('cors');

/* GET home page. */
router.get('/', cors(), function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
