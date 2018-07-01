const mongoose = require('mongoose');
const Poll = mongoose.model('Poll');

module.exports.pollsGetAll = function(req, res) {
  Poll
    .find()
    .exec(function(err, polls) {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json(err);
      } else {
        res
          .status(200)
          .json(polls);
      }
    });
};

module.exports.pollsAddOne = function(req, res) {
  console.log(req.body);
  Poll
    .create({
      title: req.body.title,
      options: req.body.options
    }, function(err, poll) {
      if (err) {
        console.log("error creating poll");
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(poll)
      }
    });
}