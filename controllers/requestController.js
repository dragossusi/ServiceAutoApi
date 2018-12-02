'use strict';

var mongoose = require('mongoose'),
    Request = mongoose.model('requests');

//function for getting all available Requests
exports.list_all_requests = function(req, res){
    Request.find(req.query, function(err, Request){
        if(err)
            res.send(err).status(200);
        res.json(Request);
    });
};

exports.create_a_request = function(req, res){
    var new_Request = new Request(req.body);
    new_Request.save(function(err, Request){ //call the save method on the instance of the model in a callback way
        if(err)
            res.send(err);
        res.json(Request);
    });
}

exports.read_a_request = function(req, res) {
    Request.findById(req.params.RequestId, function(err, Request) {
        if (err)
        res.send(err);
        res.json(Request);
    });
};

exports.update_a_request = function(req, res) {
    Request.findOneAndUpdate({_id: req.params.RequestId}, req.body, {new: true}, function(err, Request) {
      if (err)
        res.send(err);
      res.json(Request);
    });
};

exports.delete_a_request = function(req,res){
    Request.remove({_id : req.params.RequestId}, function(err, res){
        if(err)
            res.send(err);
        res.json({message : 'Request successfully deleted'});
    });
};