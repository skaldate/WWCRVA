app.directive('randomNumber', randomNumberDir);
 function randomNumberDir(){
     var directive = {
        scope:{
            min:'=',
            max:'=',
        },
        template:'<div class="wwc-random-number">{{randomNumber}}</div>'+
        '<button type="button" class="btn btn-primary btn-lg" ng-click="generateRandomNumber()">Generate</button>',
        link: function($scope){
            $scope.randomNumber = 0;

            $scope.generateRandomNumber = generateRandomNumber;

            function generateRandomNumber() {
               $scope.randomNumber = Math.floor(Math.random() * $scope.max) + $scope.min;  
            }
        }
        
     }
     return directive;
    
}