var carLot = (function (originalCarLot) {
  // Private array that holds the objects post-parse out of the JSON.
  var inventory = [];

  return {
    // Publicly viewable function that will display the current contents of the private array.
    getInventory: function () {
      return inventory;
    },
    // *extra* function added to template to allow object.description to be edited when DOM is edited.
    editInventoryDescrip: function (objectID) {
      // Allows error message to display to inform user that they need to pick a car to edit.
      if (inventory[objectID] === undefined) {
        alert(`Please pick a car to edit description!`)
      } else {
        // locates correct object in array based on matching the value of object.id with current value of the objectID global variable.
        for (var i = 0; i < inventory.length; i++) {
          if (inventory[i].id == objectID) {
            var editingDescrip = `descrip${objectID}`
            inventory[i].description = document.getElementById(editingDescrip).innerHTML;
            console.log(`Car description has been changed to: "${inventory[objectID].description}."`);
            console.log(inventory[i]);
          }
        }
      }
    },
    // *extra* function added to template to allow object.purchased to be edited when DOM is edited.
    // Additional details mostly same as above, save for additional if-statement to accomodate flipping the boolean value.
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
    // First function that processes the JSON string and turns it into useable objects.
    // Also pushes the brand-new objects into the private array in this IIFE.
    // ALSO runs the next function that actually processes the objects into elements on the DOM.
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function () {
        var carObjects = JSON.parse(inventoryLoader.responseText);
        for (var i = 0; i < carObjects.cars.length; i++) {
          inventory.push(carObjects.cars[i]);
        };
        populatePage(inventory);
      });
      inventoryLoader.open("GET", "products/inventory.json");
      inventoryLoader.send();
    }
  };
})( carLot || {} );
