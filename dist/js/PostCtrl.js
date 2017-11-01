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
// App.factory('myService', function ($http) {
//     var myService = {
//         getPosts: function () {
//             // $http returns a promise, which has a then function, which also returns a promise
//             var promise = $http.get('getPost.json').then(function (response) {
//                 // The then function here is an opportunity to modify the response
//                 console.log(response);
//                 // The return value gets picked up by the then in the controller.
//                 return response.data;
//             });
//             // Return the promise to the controller
//             return promise;
//         },
//         createPost: function () {
//             var promise = $http.post('createPost.json').then(function (response) {
//                 return response.data;
//             });
//             return promise;
//         }
//     };
//     return myService;
// });
// App.directive('oop', function () {
//     return {
//         link: function (scope, element, attrs) {
//             element.on('click', function () {
//                 if (element.text() === 'red') {
//                     element.text('green').css('color', 'green');
//                 } else {
//                     element.text('red').css('color', 'red')
//                 }
//             });
//         }
//     };
// });