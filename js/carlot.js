var carLot = (function (originalCarLot) {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    editInventoryDescrip: function (objectID) {
      for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].id == objectID) {
          inventory[i].description = carInput.value;
          console.log(`Car description has been changed to: ${inventory[objectID].description}.`);
          console.log(inventory[i]);
        }
      }
    },
    editInventoryPurchased: function (objectID) {
      if (inventory[objectID] === undefined) {
        alert(`Please pick a car to edit current inventory!`);
      } else {
        for (var i = 0; i < inventory.length; i++) {
          if (inventory[i].id == objectID) {
            if (inventory[i].purchased) {
              inventory[i].purchased = false;
              console.log(`${inventory[objectID].make} ${inventory[objectID].model} is available to be sold!`);
              console.log(inventory[i]);
            } else {
              inventory[i].purchased = true;
              console.log(`${inventory[objectID].make} ${inventory[objectID].model} has been purchased!`);
              console.log(inventory[i]);
            }
          }
        }
      }
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function () {
        var carObjects = JSON.parse(inventoryLoader.responseText);
        for (var i = 0; i < carObjects.cars.length; i++) {
          inventory.push(carObjects.cars[i]);
        };
        populatePage(inventory);
      });
      inventoryLoader.open("GET", "../products/inventory.json");
      inventoryLoader.send();
    }
  };
})( carLot || {} );