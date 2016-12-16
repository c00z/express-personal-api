// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
//gets info from body where we usually get form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');



/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  res.json({
    message: "Welcome to Zach's personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/c00z/express-personal-api/blob/master/README.md",
    baseUrl: "https://c00z.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "All available endpoints"},
      {method: "GET", path: "/api/profile", description: "My life, online"},
      {method: "GET", path: "/api/travels", description: "Where I've been"},
      {method: "GET", path: "/api/travels/:id", description: "Location Information"},
      {method: "POST", path: "/api/travels", description: "Add to the Wunderlist"},
      {method: "PATCH", path: "/api/travels/:id", description: "Update Travel location"},
      {method: "DELETE", path: "/api/travels/:id", description: "Remove from Wunderlist"}
    ]
  })
});

/**********
 * Profile *
 **********/
 app.get('/api/profile', function(req, res) {
   res.json({
   name: "Zach Cusimano",
   githubUsername: "c00z",
   githubLink:"https://github.com/c00z",
   githubProfileImage: "https://avatars1.githubusercontent.com/u/21367321?v=3&u=8b796e332e92b0575452cca4c43e50b4f214f526&s=400",
   personalSiteLink:"https://c00z.github.io/",
   currentCity: "San Francisco",
   pets:[{name: "Tripp", type: "Dog", breed: "Corgi"}]

   })
 });

//GET ALL TRAVELS
 app.get('/api/travels', function (req, res) {
   // send all travels as JSON response
   db.Travel.find(function(err, travels){
     if (err) { return console.log("index error: " + err); }
     res.json(travels);
   });
 });

// GET ONE TRAVEL
 app.get('/api/travels/:id', function (req, res) {
   db.Travel.findOne({_id: req.params.id }, function(err, travelData) {
     res.json(travelData);
   });
 });

//CREATE A NEW TRAVEL 
 app.post('/api/travels', function (req, res) {
     var travelInfo = {
     country: req.body.country,
     city:req.body.city
   };
   var newTravel = new db.Travel(travelInfo);
   newTravel.save(function(err, travel){
    if (err) {
      response.status(500).send('database error');
      return console.log('error', err);
    } else {
      res.json(travel);
    }
  });
});



 //update a travel listing
 app.patch('/api/travels/:id', function (req, res) {
   db.Travel.findOne({_id: req.params.id }, function(err, foundTravel) {
     if (err) {
       res.status(500).send('error: ', err);
     }
      else {
        foundTravel.country = req.body.country,
        foundTravel.city = req.body.city,
        foundTravel.description = req.body.description,
        foundTravel.year = req.body.year,
        foundTravel.image = req.body.image,
        foundTravel.save(function (err, savedTravel) {


        })


        res.json(foundTravel);
      }
   });
 });


 // DELETE TRAVEL
 app.delete('/api/travels/:id', function (req, res) {
   // get travel id from url params (`req.params`)
   console.log('travels delete', req.params);
   var travelId = req.params.id;
   // find the index of the travel we want to remove
   var deleteTravelIndex = travels.findIndex(function(element, index) {
     return (element._id === parseInt(req.params.id)); //params are strings
   });
   console.log('deleting travels with index', deleteTravelIndex);
   var travelToDelete = travels[deleteTravelIndex];
   travels.splice(deleteTravelIndex, 1);
   res.json(travelToDelete);
 });


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
