var carLot = (function (manipCarLot) {
  // ALL DOM-EDITING FUNCTIONS GO HERE!
  // Changes the color of the border surrounding the car-card to the color of the car on mouseenter.
  manipCarLot.changeColor = function (mouseenter) {
    var colorID = mouseenter.id.replace("car", "color");
    var carColor = document.getElementById(colorID).innerHTML;
    mouseenter.style.borderColor = carColor;
  };
  // Changes the color of the border surrounding the car card back to black on mouseleave.
  manipCarLot.changeBack = function (mouseleave) {
    mouseleave.style.borderColor = "#202020";
  };
  // This starts the process for editing the DOM by telling the user what car is being edited, putting focus on the input, and assigning a value to currentID.
  manipCarLot.carsStartEditing = function (clicked) {
    // for-loop to check if any car-cards already have the "edit-select" class (signifying that they are being edited).
    for (var i = 0; i < carCards.length; i++) {
      // if any car-card has class of "edit-select", then it removes that class.
      if (carCards.item(i).classList.contains("edit-select")) {
        carCards.item(i).classList.remove("edit-select");
      }
    };
    carInput.focus();
    // adds the "edit-select" class to the freshly clicked card.
    clicked.classList.add("edit-select");
    var currentCar = clicked.children[1].innerHTML;
    document.getElementById("current-car").innerHTML = `Now editing ${currentCar}`;
    currentID = clicked.id.replace("car", "");
  };
  // Continues the process of editing by binding the user's keystrokes to the car's description.
  manipCarLot.carsFinishEditing = function (currentID) {
    var descripID = `descrip${currentID}`;
    var descriptionEdit = document.getElementById(descripID);
    descriptionEdit.innerHTML = carInput.value;
  };
  // Toggles the DOM element of whether a car has been purchased.
  // Originally had document.getElementById(soldID).innerHTML assigned to a variable, but it didn't want to cooperate?
  manipCarLot.soldToggle = function (currentID) {
    var soldID = `sold${currentID}`
    if (document.getElementById(soldID).innerHTML == "Sold!") {
      document.getElementById(soldID).innerHTML = "Available!";
    } else {
      document.getElementById(soldID).innerHTML = "Sold!";
    }
  };

  return carLot;

})( carLot || {} );