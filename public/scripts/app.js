console.log("Sanity Check: JS is working!");

var template;
var $travelsList;
var allTravels = [];

$(document).ready(function(){

$travelsList = $('#travelTarget');

var source = $('#travels-template').html();
template = Handlebars.compile(source);

//load api on page load.
$.ajax({
  method: 'GET',
  url: '/api/travels',
  success: handleSuccess,
  error: handleError

});

//Add a new destination on page and db
$('#newTravelForm').on('submit', function(event) {
  event.preventDefault();
  $.ajax({
    method: 'POST',
    url: '/api/travels',
    data: $(this).serialize(),
    success: newTravelSuccess,
    error: newTravelError
  });
});



//create handle bar key value pair
function handleSuccess(allTravels) {
  allTravels.forEach(function(travelData){
    travelHtml = template({travel: travelData});
    $travelsList.append(travelHtml);

  })
};

function handleError(e) {
  console.log('uh oh');
  $('#travelTarget').text('Failed to load travels, is the server working?');
}

function newTravelSuccess(json) {
  $('#newTravelForm input').val('');
  allTravels.push(json);
  console.log(allTravels);
  allTravels.append(json);
}

function newTravelError() {
  console.log('newtravel error!');
}


});
