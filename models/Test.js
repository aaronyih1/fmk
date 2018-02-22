const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  title: String,
  isDone: Boolean
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;