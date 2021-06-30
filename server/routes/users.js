var express = require('express');
var router = express.Router();
var USER_SIGN_UP = require('../src/models/signUpSchema') 

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  var USER_SIGN_UP_DETAIL = new USER_SIGN_UP({
    fullname:req.body.fullname,
    username:req.body.username,
    email:req.body.email,
    password:req.body.password  
  })
  USER_SIGN_UP_DETAIL.save()
    .then((data)=>res.json(data))
    .catch(err=>res.json(err))
});

module.exports = router;
