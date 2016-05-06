var carLot = (function (eventCarLot) {

  eventCarLot.activateEvents = function () {
    for (var i = 0; i < carCards.length; i++) {
      carCards.item(i).addEventListener('click', function() {
        carLot.carsStartEditing(event.currentTarget);
      });
    };
    carInput.addEventListener("keyup", function(e) {
      if (e.keyCode === 13) {
        carLot.editInventoryDescrip(currentID);
        carInput.value = '';
      } else {
        carLot.carsFinishEditing(currentID);
      };
    });
    soldButton.addEventListener("click", function() {
      carLot.soldToggle(currentID);
      carLot.editInventoryPurchased(currentID);
    });
  };
  return eventCarLot;

})( carLot || {} );