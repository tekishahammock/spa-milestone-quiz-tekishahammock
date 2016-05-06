var container = document.getElementById('container');
var carInput = document.getElementById('car-input');
var soldButton = document.getElementById('sold');
var carCards = document.getElementsByClassName('car-cards');
var currentID = '';

function populatePage (inventory) {
  var counter = 0
  // Loop over the inventory and populate the page
  for (var i = 0; i < inventory.length; i++) {
    var purchased = '';
    var cars = inventory[i];
    cars.id = counter
    if (cars.purchased === true) {
      purchased = "Sold!";
    } else {
      purchased = "Available!";
    }
    container.innerHTML +=
     `<div class="car-cards" id="car${counter}">
        <img src="${cars.image}">
        <h2>${cars.make} ${cars.model}</h2>
        <p><span class="car-details">Year:</span> ${cars.year}</p>
        <p><span class="car-details">Price:</span> ${cars.price}</p>
        <p><span class="car-details">Purchased:</span> <span id="sold${counter}">${purchased}</span></p>
        <h3>Description:</h3>
        <div class="description">
          <p><span class="car-details">Color:</span> ${cars.color}</p>
          <p><span class="car-details">Details:</span> <span id="descrip${counter}">${cars.description}</span></p>
        </div>
      </div>`;
    counter++;
  }

  // Now that the DOM is loaded, establish all the event listeners needed
  carLot.activateEvents();
  // Three event listeners, one for enter on input, one for click on button, one for click on dom element.
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
carLot.loadInventory();