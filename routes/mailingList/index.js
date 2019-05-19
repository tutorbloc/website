var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})
const {
  check,
  validationResult
} = require('express-validator/check');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('config/mailchimp.properties');
var api_key = properties.path().api.key;

var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp(api_key);

/* GET home page. */
router.post('/addUser', urlencodedParser, [check('emailAddress', 'Please enter a valid email address').not().isEmpty().isEmail()], function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Error in email');
    for (error in errors) {
      console.log(error);
    }
  } else {
    console.log('Valid email');
    // add to mailchimp

    //Update User
    // mailchimp.put('/lists/4a20512f8c/members//14111e364a9e480f594b044bb3a91beb', {
    //   email_address: req.body.emailAddress,
    //   status: 'subscribed',
    //   merge_fields: {
    //     FNAME: 'fname1',
    //     LNAME: 'lname1',
    //     UTYPE: 'Tutor'
    //   },
    //   source: 'Tutorbloc - Website'
    // }).then(function(results) {
    //   console.log(results.source);
    // }).catch(function(err){
    //   console.log(err);
    // });

    // New User
    mailchimp.post('/lists/4a20512f8c/members', {
      email_address: req.body.emailAddress,
      status: 'subscribed',
      merge_fields: {
        FNAME: 'fname',
        LNAME: 'lname',
        UTYPE: 'Tutor'
      },
      source: 'Tutorbloc - Website'
    }).then(function(results) {
      console.log(results);
    }).catch(function(err){
      console.log(err);
    });

    // retrieves users
  //   mailchimp.get({
  //     path: '/lists/4a20512f8c/members/'
  //   }, function(err, result) {
  //
  //     // console.log(result.members[1]);
  //     result.members.forEach(function(value){
  //       console.log(value.email_address);
  //     });
  //
  //   })
  }

  //respond with ejs?
  // res.redirect('/');
  res.redirect('back');

});

module.exports = router;
