app.service('raffelItemService', function(){
    var swagItems =[];
    this.addItem = function(item){
        swagItems.push(item);
    }
    this.updateItem = function(item){
        swagItems.forEach(function(swagItem){
            if(item.item == swagItem.id){
                swagItem = item;
            }
        });
    }
    this.getItems = function(){
        return swagItems;
    }
    this.getItemList = function(){
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
    this.deleteItem = function(item){
        for(var i=0; i<swagItems.length;i++){
            if(swagItems[i].itemId == item.id){
                swagItems[i].quantity--;
                if(swagItems[i].quantity == 0){
                swagItems.splice(i,1);
                }
            }
        }
    }
    
});