const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  },
  start: {
    type: String,
    required: true
  },
  resort: {
    type: String,
    required: true
  },
  perPerson: {
    type: Number,
    required: true,
    min: 0
  },
  image: String,
  description: {
    type: String,
    required: true
  }
});

mongoose.model('Trip', tripSchema);