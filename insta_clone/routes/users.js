var express = require('express');
var router = express.Router();
var User = require('../models/index').user;

module.exports = function(passport) {
  router.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    res.json({user: req.user});
  });

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
    .then(function(users) {
      res.send(users);
    });
});

//CREATE USER
// router.post('/', function(req, res) {
//   User.create(req.body)
//     .then(function(newUser) {
//       res.send(newUser);
//     });
// });

//DELETE USER
router.delete('/:id', function(req, res) {
  console.log(req.params);
  User.findById(req.params.id)
    .then(function(user) {
      user.destroy();
      res.send(`User ${req.params.id} has removed`);
    });
});

//UDATE USER 
router.put('/:id', function(req, res) {
  User.findById(req.params.id)
    .then(function(user) {
      user.update(req.body)
        .then(function(updatedUser) {
          res.send(updatedUser);
        });
    });
});

<<<<<<< HEAD
module.exports = function(passport) {
  router.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    res.json({user: req.user});
  });
=======
>>>>>>> da1e65c30317c3c0108df40e581b0b5868414177

  return router;
};
