var carLot = (function (manipCarLot) {
  // ALL DOM-EDITING FUNCTIONS GO HERE!
  // This starts the process for editing the DOM by telling the user what car is being edited, putting focus on the input, and assigning a value to currentID.
  manipCarLot.carsStartEditing = function (clicked) {
    carInput.focus();
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