var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('features/index', { title: 'tutorbloc | discover and instantly book qualified tutors' });
});

module.exports = router;
