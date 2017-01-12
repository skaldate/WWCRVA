//var app = angular.module('myApp', []);

app.controller('itemsController', function($scope, raffelItemService) {
    $scope.selectedFile = "";
    $scope.thumbnail = "";
    $scope.swagItems = raffelItemService.getItems();
    var currentlySelectedItem;

    $scope.addSwag = function() {
        var swag = {
            itemId: 0,
            itemName: $scope.itemName,
            quantity: $scope.itemQuantity,
            thumbnail: $scope.thumbnail,
            selected: false,
        }
        if (currentlySelectedItem != undefined) {
            currentlySelectedItem.itemName = $scope.itemName;
            currentlySelectedItem.quantity = $scope.itemQuantity;
            currentlySelectedItem.thumbnail = $scope.thumbnail;
            raffelItemService.updateItem(currentlySelectedItem);
        } else {
            swag.itemId = $scope.swagItems.length;
            // $scope.swagItems.push(swag);
            raffelItemService.addItem(swag);
        }
        resetForm();
    }
    $scope.updateItem = function(item) {
        resetForm();
        item.selected = true;
        currentlySelectedItem = item;
        $scope.itemName = item.itemName;
        $scope.itemQuantity = item.quantity;
        $scope.thumbnail = item.thumbnail;
    }

    function resetForm() {
        $scope.itemName = "";
        $scope.itemQuantity = "";
        $scope.selectedFile = "";
        $scope.thumbnail = "";
        if (currentlySelectedItem != undefined) {
            currentlySelectedItem.selected = false;
            currentlySelectedItem = undefined;
        }

    }
});