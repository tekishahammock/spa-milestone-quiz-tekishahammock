var carLot = (function (eventCarLot) {
  // ALL PROJECT EVENTHANDLERS GO HERE
  // Function that gets called to fire only after the DOM has been loaded.
  eventCarLot.activateEvents = function () {
    // Listens for one of the car cards to be clicked (anywhere in the card) to fire the first editing function.
    // Passes in the DOM element for the currentTarget.
    for (var i = 0; i < carCards.length; i++) {
      // adds a mouseenter event to the cards to allow for cool changing colors!
      carCards.item(i).addEventListener('mouseenter', function() {
        carLot.changeColor(event.currentTarget);
      });
      // adds a mouseleave event to the cards to change back the cool changing colors!
      carCards.item(i).addEventListener('mouseleave', function() {
        carLot.changeBack(event.currentTarget);
      });
      carCards.item(i).addEventListener('click', function() {
        carLot.carsStartEditing(event.currentTarget);
        carLot.editInventoryDescrip(currentID);
        carInput.value = '';
      });
    };
    // Listens for key presses in the input field in the nav.
    carInput.addEventListener("keyup", function(e) {
      if (e.keyCode === 13) {
        // If enter is pressed, will take the final value of the user input and update the private array.
        carLot.editInventoryDescrip(currentID);
        carInput.value = '';
      } else {
        // Any other keys pressed will start and continue editing the current car's description.
        carLot.carsFinishEditing(currentID);
      };
    });
    // fires the toggle for the sold value in both the DOM and the array.
    soldButton.addEventListener("click", function() {
      carLot.soldToggle(currentID);
      carLot.editInventoryPurchased(currentID);
    });
  };
  return eventCarLot;

})( carLot || {} );
