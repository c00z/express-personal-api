var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TravelSchema = new Schema({
  country: String,
  city: String,
  description: String,
  year: String,
  image: String
});

var Travel = mongoose.model('Travel', TravelSchema);

module.exports = Travel;

/////////////
