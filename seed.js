// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var travel_list = [
  {
  _id: 1,
  country: "Iceland",
  city: "Reykjavik",
  description: "Chasing the northern lights for seven days",
  year: "2016",
  image: "http://i.imgur.com/MV9Hdvc.jpg"
  },
  {
    _id: 2,
    country: "Norway",
    city: "Bergen",
    description: "Hunting for trolls",
    year: "2016",
    image: "http://i.imgur.com/2cNpk9i.jpg"
  },
  {
    _id: 3,
    country: "Indonesia",
    city: "Bali",
    description: "Beach by day, scooter by night",
    year: "2016",
    image: "http://i.imgur.com/VBXYEIo.jpg"
  }
]



db.Travels.create(new_travel, function(err, travels){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new travel site", travels._id)
  process.exit(); // we're all done! Exit the program.
})
