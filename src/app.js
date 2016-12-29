
var app = angular.module('myApp', ['ngRoute']);
console.log("bootstrapped");
 
app.config(function($routeProvider){
    $routeProvider.otherwise('/items-form');

    $routeProvider.when('/items-form',{
        templateUrl: 'items-form/items-form.html',
        controller: 'ItemsController',
        controllerAs: 'items'
    }).when('/raffle', {
        templateUrl: 'raffle/raffle.html',
        controller: 'RaffleController',
        controllerAs: 'raffle'
    });
});


