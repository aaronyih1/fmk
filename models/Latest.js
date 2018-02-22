const mongoose = require('mongoose');

const latestSchema = new mongoose.Schema({
  title: String
});

const Latest = mongoose.model('Latest', latestSchema);
module.exports = Latest;