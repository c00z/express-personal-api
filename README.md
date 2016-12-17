# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API - Weekend Lab

A JSON API for data about me and the places that I've been.

Feel free to add to my wunderlust list!

Please fork & clone this repo to get started.

## Data Brainstorm

#### Profile

* Name
* Github Username
* Github Link
* Github Profile Image
* Personal Site Link
* Current City
* Pets


#### Travels

* City
* Country
* Description
* Year
* Image


### Restful routes for travels

* GET /api/travels  Displays a list of all travels
* GET /api/travels/:id  Display a specific travel
* POST /api/travels  Add to the travel list
* PATCH /api/travels/:id  Update a travel location
* DELETE /api/travels/:id  Remove a location
