var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/votingapp';

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

require('./poll.model.js');