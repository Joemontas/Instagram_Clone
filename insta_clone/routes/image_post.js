var express = require('express');
var router = express.Router();
var ImagePost = require('../models/index').image_post;

/* GET users listing. */
router.get('/', function (req, res, next) {
    ImagePost.findAll()
        .then(function (imagePost) {
            res.send(imagePost);
        });
});

//CREATE USER
router.post('/', function (req, res) {
    ImagePost.create(req.body)
        .then(function (newImagePost) {
            res.send(newImagePost);
        });
});

//DELETE USER
router.delete('/:id', function (req, res) {
    ImagePost.findById(req.params)
        .then(function (imagePost) {
            user.destroy();
            res.send(`${res.params.id} has removed`);
        });
});

//UDATE USER 
router.put('/:id', function (req, res) {
    ImagePost.findById(req.params.id)
        .then(function (user) {
            user.update(req.body)
                .then(function (updatedUser) {
                    res.send(updatedUser);
                });
        });
});

module.exports = router;
