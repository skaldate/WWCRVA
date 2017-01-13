app.controller('raffelController', function($scope, raffelItemService) {
    $scope.swagItems = raffelItemService.getItemList();
    $scope.selectedItem = {};
    $scope.winner = 0;
    $scope.rangeText = "Please select max number for raffel";


    $scope.raffelItem = function(item) {
        item.selected = true;
        $scope.selectedItem = item;
    }

    $scope.raffelGiven = function() {
        raffelItemService.deleteItem($scope.selectedItem);
        $scope.swagItems = raffelItemService.getItemList();
        $scope.selectedItem.thumbnail = "";
        $scope.selectedItem.name = "";
        $scope.winner = 0;
    }

    $scope.rangeChange = function(max) {
        $scope.rangeText = "Raffel will be drawn between 1 - " + max;
    }
});