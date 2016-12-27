
var app = angular.module('myApp', ["ngRoute"]);
console.log("bootstrapped");
 
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"itemsForm.html",
        controller:"itemsController"
    }).when("/raffel", {
        templateUrl:"raffel.html",
        controller:"raffelController"
    })

});


