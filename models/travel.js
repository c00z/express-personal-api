var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

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

var Travel = mongoose.model('Travel', TravelSchema);

module.exports = Travel;

/////////////
//view mongoose schema types. mongoosejs.com/docs
