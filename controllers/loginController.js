'use strict';

var mongoose = require('mongoose'),
Manager = mongoose.model('managers');

exports.login = function(req, res) {
    // console.log(`${req.body.email} ${req.body.password}`)
    Manager.findOne({
        email : req.body.email,
        password :req.body.password
    }, function(err, manager) {
        if (err) next(err);
        else if(manager) res.send(true);
        else res.status(200).send(false);
    });
};