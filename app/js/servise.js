App.factory('myService', function($http) {
    var myService = {
        getPosts: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('js/getPost.json').then(function (response) {
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
    return myService;
});