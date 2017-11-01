angular.module("App").controller('PostController', ['myService', '$scope', function(myService, $scope) {

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

