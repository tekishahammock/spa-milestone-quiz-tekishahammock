// GLOBAL VARIABLES:
var container = document.getElementById('container');
var carInput = document.getElementById('car-input');
var soldButton = document.getElementById('sold');
var carCards = document.getElementsByClassName('car-cards');
// currentID gets updated to suit the needs of locating a specific ID number each time specific functions run.
var currentID = '';

// Puts our parsed JSON objects into the DOM.
function populatePage (inventory) {
  var counter = 0
  //Specifically looping over the new objects in the private array instead of directly from the parsed JSON.
  for (var i = 0; i < inventory.length; i++) {
    var purchased = '';
    var cars = inventory[i];
    cars.id = counter
    // A bit of extra code that allows the boolean value of object.purchased to map to a relatable string.
    if (cars.purchased === true) {
      purchased = "Sold!";
    } else {
      purchased = "Available!";
    }
    // THIS IS WHERE THE MAGIC HAPPENS!
    // Also, added span tags to specific locations that I needed to be able to edit from the DOM, is that kosher?
    container.innerHTML +=
     `<div class="col-sm-4 card-container">
        <div class="car-cards" id="car${counter}">
          <img src="${cars.image}" class="img-responsive">
          <h2>${cars.make} ${cars.model}</h2>
          <p><span class="car-details">Year:</span> ${cars.year}</p>
          <p><span class="car-details">Price:</span> ${cars.price}</p>
          <p><span class="car-details">Purchased:</span> <span id="sold${counter}">${purchased}</span></p>
          <h3>Description:</h3>
          <div class="description">
            <p><span class="car-details">Color:</span> <span id="color${counter}">${cars.color}</span></p>
            <p><span class="car-details">Details:</span> <span id="descrip${counter}">${cars.description}</span></p>
          </div>
        </div>
      </div>`;
    counter++;
  }

  // Clever way of adding eventListeners to not-yet-existant-but-will-exist-on-load elements
  carLot.activateEvents();
}

// The beginning of this Rube-Goldberg Machine. Everything runs in the right order and everything is easier in the end.
carLot.loadInventory();
