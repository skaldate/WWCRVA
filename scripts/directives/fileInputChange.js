app.directive('customOnChange', function() {
    return {
        scope: {
            pic: '=',
            fileName: '='
        },
        restrict: 'A',
        link: function(scope, element, attrs) {

            var uploadFile = function() {
                var f = event.target.files[0];
                var filename = event.target.files[0].name;
                scope.fileName = filename;
                scope.pic = "";
                var reader = new FileReader();
                reader.onload = (function(theFile) {
                    return function(e) {
                        // Render thumbnail.
                        scope.pic = e.target.result;
                        scope.$apply();
                    };
                })(f);
                reader.readAsDataURL(f);
            }
            element.bind('change', uploadFile);;
        }
    };
});