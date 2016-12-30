app.service('RaffleItemService', RaffleItemService);

RaffleItemService.$inject = [];
function RaffleItemService() {
    var swagItems = [];

    this.addItem = addItem;
    this.deleteItem = deleteItem;
    this.getItems = getItems;
    this.getItemList = getItemList;
    this.updateItem = updateItem;

    function addItem(item) {
        swagItems.push(item);
    }

    function deleteItem(item) {
        for(var i=0; i<swagItems.length;i++){
            if(swagItems[i].itemId == item.id){
                swagItems[i].quantity--;
                if(swagItems[i].quantity == 0){
                swagItems.splice(i,1);
                }
            }
        }
    }

    function getItems() {
        return swagItems;
    }

    function getItemList() {
        var itemList = [];
        swagItems.forEach(function(swagItem){
            for(var i=0;i<swagItem.quantity; i++){
                var item = {
                    id: swagItem.itemId,
                    name : swagItem.itemName,
                    thumbnail : swagItem.thumbnail,
                }
                itemList.push(item);
            }
        });
        return itemList;
    }

    function updateItem(item) {
        swagItems.forEach(function(swagItem){
            if(item.item == swagItem.id){
                swagItem = item;
            }
        });
    }
}