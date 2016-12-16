var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TravelSchema = new Schema({
  description: String,
  city: String,
  country: String,
  year: String,
  image: String
});

var Travel = mongoose.model('Travel', TravelSchema);

module.exports = Travel;

/////////////
