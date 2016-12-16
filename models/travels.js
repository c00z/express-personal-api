var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

Travels = require('./travels')

var TravelsSchema = new Schema({
  _id: String,
  description: String,
  city: String,
  country: String,
  year: String,
  image: String
});

var Travels = mongoose.model('Travels', TravelsSchema);

module.exports = Travels;

/////////////
