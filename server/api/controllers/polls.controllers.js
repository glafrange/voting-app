const mongoose = require('mongoose');
const Poll = require('Poll');

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
}