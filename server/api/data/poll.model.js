const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  options: [String]
});

mongoose.model("Poll", pollSchema, 'polls');