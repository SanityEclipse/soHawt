var express = require('express');
var router = express.Router();


router.get('/entry1', function(req, res, next) {
  res.render('entry1', { title: 'So HAWT Right Now' });
});

module.exports = router;
