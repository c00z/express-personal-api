console.log("Sanity Check: JS is working!");

var template;
var $travelsList;
var allTravels = [];

$(document).ready(function(){

$travelsList = $('#travelTarget');

var source = $('#travels-template').html();
template = Handlebars.compile(source);

///in html <script id="travels-template" type="text/x-handlebars-template">

var source = $('#travels-template').html();
  template = Handlebars.compile(source);

$.ajax({
  method: 'GET',
  url: '/api',
  success: handleSuccess,
  error: handleError

});


// for each travel
  allTravels.forEach(function(travelData){
    // create HTML for individual travel. travel data creates empty call for html (travel.country)
    travelHtml = template({travel: travelData});
    // add travel to page
    $travelsList.append(travelHtml);
  });
};


function handleSuccess(json) {
  allTravels = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#travelTarget').text('Failed to load travels, is the server working?');
}
