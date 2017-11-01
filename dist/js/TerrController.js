angular.module("App").controller('TerrController', ['myService', '$scope', function(myService, $scope) {

    $scope.posts = myService.getPosts().then(function(response) {
        $scope.posts = response;
    });



    $scope.createPost = function(form) {
        console.log(form);
        myService.createPost(form).then(function(response) {
            alert('Your post has been successfully created.');
            $scope.form = null;
        });
    }
}]);
App.directive('oop', function () {
    return {
        link: function (scope, element, attrs) {
            element.on('click', function () {
                if (element.text() === 'red') {
                    element.text('green').css('color', 'green');
                } else {
                    element.text('red').css('color', 'red')
                }
            });
        }
    };
});

