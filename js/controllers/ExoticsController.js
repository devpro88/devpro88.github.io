angular.module("App").controller('TerrController', ['myService2', '$scope', function(myService2, $scope) {

    $scope.posts = myService2.getPosts().then(function(response) {
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
App.factory('myService2', function($http) {
    var myService2 = {
        getPosts: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('js/json/getTerr.json').then(function (response) {
                // The then function here is an opportunity to modify the response
                // console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        },
        createPost: function() {
            var promise = $http.post('js/createPost.json').then(function (response) {
                return response.data;
            });
            return promise;
        }
    };
    return myService2;
});