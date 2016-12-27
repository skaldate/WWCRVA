app.directive("randomNumber", randomNumberDir);
 function randomNumberDir(){
     var directive = {
        
        scope:{
            min:'=',
            max:'=',
        },
        template:'<div class="wwc-random-number">{{randomNumber}}</div>'+
        '<button type="button" class="btn btn-primary btn-lg" ng-click="generateRandomNumber()">Generate</button>',
        link: function($scope){
            $scope.randomNumber ="0";
            $scope.currentIndex= 0;
            $scope.numbers = [];
            for(var i = 0; i<$scope.max; i++){
                $scope.numbers[i] = i+1;
            }

            $scope.generateRandomNumber = function(){
                if($scope.randomNumber != "")
                {
                    $scope.numbers.splice($scope.currentIndex,1);
                    $scope.max--;
                }
               $scope.currentIndex = Math.floor((Math.random() * $scope.max) + 1);
               $scope.randomNumber = $scope.numbers[$scope.currentIndex]; 
            }
        }
        
     }
     return directive;
    
}