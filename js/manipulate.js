var carLot = (function (manipCarLot) {

  manipCarLot.carsStartEditing = function (clicked) {
    currentID = clicked.id.replace("car", "");
    carInput.focus();
  };

  manipCarLot.carsFinishEditing = function (currentID) {
    var descripID = `descrip${currentID}`
    var descriptionEdit = document.getElementById(descripID);
    descriptionEdit.innerHTML = carInput.value;
  };

  // NOT CURRENTLY WORKING CORRECTLY
  manipCarLot.soldToggle = function (currentID) {
    var soldID = `sold${currentID}`
    var soldEdit = document.getElementById(soldID).innerHTML;
    if (soldEdit == "Sold!") {
      soldEdit = "Available!";
    } else {
      soldEdit = "Sold!";
    }
  };

  return carLot;

})( carLot || {} );