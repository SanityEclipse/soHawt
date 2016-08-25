var express = require('express');
var router = express.Router();


router.get('/entry2', function(req, res, next) {
  res.render('entry2', { title: 'So HAWT Right Now' });
});

module.exports = router;
