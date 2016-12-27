app.controller('raffelController',function($scope, raffelItemService){
    $scope.swagItems = raffelItemService.getItemList();
    $scope.selectedItem ={};
    $scope.raffelItem = function(item){
        $scope.selectedItem = item;
    }
    $scope.raffelGiven = function(){
        raffelItemService.deleteItem($scope.selectedItem);
        $scope.swagItems = raffelItemService.getItemList();
        $scope.selectedItem ={};

    }
});