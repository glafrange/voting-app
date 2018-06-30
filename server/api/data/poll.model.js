const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  options: [{value: String, voters: Number}]
});

mongoose.model("Poll", pollSchema, 'polls');