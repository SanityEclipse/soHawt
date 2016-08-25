var express = require('express');
var router = express.Router();


router.get('/entry3', function(req, res, next) {
  res.render('entry3', { title: 'So HAWT Right Now' });
});

module.exports = router;
