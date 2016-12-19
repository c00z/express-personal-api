var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//Set up Travel Schema
var TravelSchema = new Schema({
  country: String,
  city: String,
  description: {
      type: String,
      default: "Awesome place to check out!"
    },
  year: {
     type: String,
     default: "Visit next year!"
      },
  image: {
  type: String,
  default: "http://i.imgur.com/mAP6Ida.jpg"
     }
});

//Set up Travel Model
var Travel = mongoose.model('Travel', TravelSchema);

module.exports = Travel;
