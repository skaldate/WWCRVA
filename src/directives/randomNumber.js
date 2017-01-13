app.directive("randomNumber", randomNumberDir);

function randomNumberDir() {
    var directive = {

        scope: {
            triggerText: '@',
            winningNumber: '=',
            onRangeChange: '&'
        },
        template: '<input type="range" min="0" max="100" ng-model="range" step="1" ng-change="resetNumbers(value)">' +
            '<button type="button" class="btn btn-primary btn-lg" ng-click="generateRandomNumber()">{{triggerText}}</button>' +
            '<div class="wwc-random-number">{{winningNumber}}</div>',

        link: function($scope) {
            $scope.range = 0;
            $scope.currentIndex = 0;
            $scope.numbers = [];
            $scope.resetNumbers = function() {
                $scope.max = $scope.range;
                $scope.numbers = [];
                for (var i = 0; i < $scope.max; i++) {
                    $scope.numbers[i] = i + 1;
                }
                $scope.onRangeChange({ max: $scope.range });
            }
            $scope.resetNumbers();

            $scope.generateRandomNumber = function() {
                if ($scope.winningNumber != "") {
                    $scope.numbers.splice($scope.currentIndex, 1);
                    $scope.max--;
                }
                $scope.currentIndex = Math.floor((Math.random() * $scope.max) + 1);
                $scope.winningNumber = $scope.numbers[$scope.currentIndex];
                console.log("Winner:" + $scope.winningNumber);
            }
        }

    }
    return directive;

}