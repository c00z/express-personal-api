console.log("Sanity Check: JS is working!");

var template;
var $travelsList;
var allTravels = [];

$(document).ready(function(){

  $travelsList = $('#travelTarget');

  var source = $('#travels-template').html();
  template = Handlebars.compile(source);

});
