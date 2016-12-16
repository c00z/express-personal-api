// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var travel_list = [
  {
  country: "Iceland",
  city: "Reykjavik",
  description: "Chasing the northern lights for seven days",
  year: "2016",
  image: "http://i.imgur.com/MV9Hdvc.jpg"
  },
  {
    country: "Norway",
    city: "Bergen",
    description: "Hunting for trolls",
    year: "2016",
    image: "http://i.imgur.com/2cNpk9i.jpg"
  },
  {
    country: "Indonesia",
    city: "Bali",
    description: "Beach by day, scooter by night",
    year: "2016",
    image: "http://i.imgur.com/VBXYEIo.jpg"
  }
]


db.Travel.remove({}, function(err, travels){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all travels');

    // create new records based on the array books_list
    db.Travel.create(travel_list, function(err, travels){
      if (err) { return console.log('BROKEN!!', err); }
      console.log("created", travels.length, "travels");
      process.exit();
    });
  }
});
