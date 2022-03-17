const mongoose = require('mongoose');

const bkfcSchema = mongoose.Schema({
  key: String,
  name: String,
  rating: String,
  image_url: String,
  place_url: String,
  bookmark: String,
});

const Bkfc = mongoose.model('Bkfc', bkfcSchema);

module.exports = Bkfc;
