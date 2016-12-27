//var app = angular.module('myApp', []);

app.controller('itemsController', function($scope, raffelItemService){
    $scope.chapter = "RVA";
    $scope.selectedFile = "";
    $scope.thumbnail = "";
    $scope.swagItems = raffelItemService.getItems();
    var currentlySelectedItem;
    console.log("Number of items "+ $scope.swagItems.length);

    $scope.test = function(){
        console.log("selected file" + $scope.selectedFile);
    }
    $scope.uploadFile = function(){
        var f= event.target.files[0];
        var filename = event.target.files[0].name;
        $scope.selectedFile = filename;
        $scope.thumbnail = "";
        var reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {
            // Render thumbnail.
            $scope.thumbnail = e.target.result;
            
            };
      })(f);
      reader.readAsDataURL(f);
        console.log( $scope.selectedFile);
    };

    $scope.addSwag = function(){
        var swag = {
            itemId:0,
            itemName : $scope.itemName,
            quantity: $scope.itemQuantity,
            thumbnail : $scope.thumbnail,
            selected : false,
        }
        if(currentlySelectedItem != undefined)
        {
            currentlySelectedItem.itemName = $scope.itemName;
            currentlySelectedItem.quantity = $scope.itemQuantity;
            currentlySelectedItem.thumbnail = $scope.thumbnail;
            raffelItemService.updateItem(currentlySelectedItem);
        }
        else{
            swag.id =  $scope.swagItems.length;
           // $scope.swagItems.push(swag);
            raffelItemService.addItem(swag);
        }
        resetForm();
    }
    $scope.updateItem = function(item){
        resetForm();
        item.selected = true;
        currentlySelectedItem = item;
        $scope.itemName = item.itemName;
        $scope.itemQuantity = item.quantity;
        $scope.thumbnail = item.thumbnail;
    }
    function resetForm(){
        $scope.itemName = "";
        $scope.itemQuantity="";
        $scope.selectedFile = "";
        $scope.thumbnail="";
        if(currentlySelectedItem != undefined){
            currentlySelectedItem.selected = false;
            currentlySelectedItem = undefined;
        }

    }
});