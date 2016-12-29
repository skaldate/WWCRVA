app.controller('ItemsController', ItemsController);

ItemsController.$inject = ['RaffleItemService'];
function ItemsController(RaffleItemService) {
    var currentlySelectedItem;
    var items = this;

    items.chapter = "RVA";
    items.selectedFile = "";
    items.thumbnail = "";
    items.swagItems = RaffleItemService.getItems();

    items.addSwag = addSwag;
    items.test = test;
    items.updateItem = updateItem;
    items.uploadFile = uploadFile;

    function _resetForm() {
        items.itemName = "";
        items.itemQuantity="";
        items.selectedFile = "";
        items.thumbnail="";

        if(currentlySelectedItem != undefined){
            currentlySelectedItem.selected = false;
            currentlySelectedItem = undefined;
        }
    }

    function addSwag() {
        var swag = {
            itemId:0,
            itemName : items.itemName,
            quantity: items.itemQuantity,
            thumbnail : items.thumbnail,
            selected : false
        };

        if (currentlySelectedItem != undefined) {
            currentlySelectedItem.itemName = items.itemName;
            currentlySelectedItem.quantity = items.itemQuantity;
            currentlySelectedItem.thumbnail = items.thumbnail;

            RaffleItemService.updateItem(currentlySelectedItem);
        }
        else{
            swag.id =  items.swagItems.length;
            RaffleItemService.addItem(swag);
        }

        _resetForm();
    }

    function test() {
        console.log("selected file" + items.selectedFile);
    }

    function updateItem(item) {
        _resetForm();
        item.selected = true;
        currentlySelectedItem = item;

        items.itemName = item.itemName;
        items.itemQuantity = item.quantity;
        items.thumbnail = item.thumbnail;
    }

    function uploadFile() {
        var f = event.target.files[0];
        var filename = event.target.files[0].name;
        var reader = new FileReader();

        items.selectedFile = filename;
        items.thumbnail = "";
        
        reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                items.thumbnail = e.target.result;
            };
        })(f);

        reader.readAsDataURL(f);
        console.log(items.selectedFile);
    }
}