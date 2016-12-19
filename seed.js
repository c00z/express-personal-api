var db = require('./models');

//Travel list seed data
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
    description: "Hunting for trolls in the far north",
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

//
db.Travel.remove({}, function(err, travels){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all travels');

    // create new records based on the array travel_list
    db.Travel.create(travel_list, function(err, travels){
      if (err) { return console.log('BROKEN!!', err); }
      console.log("created", travels.length, "travels");
      process.exit();
    });
  }
});
