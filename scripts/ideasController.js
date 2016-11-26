var app = angular.module('myApp', []);

// controller here
app.controller('ideasController', function($scope) {
    $scope.todoList =[{place:"text", cost:40.00}]
    console.log("Initialize");
    $scope.sampleText = "Hello World"
    $scope.addIdeas = function(){
        $scope.todoList.push({
            place : $scope.place,
            cost: $scope.cost
        })
    } 
});
