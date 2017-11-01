var App = angular.module("App", ['ngRoute']);


App.controller("MainController", function ($scope, $location, $anchorScroll, $http) {
    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll();
    };
    $scope.text = '';

    $scope.message = function (data) {
        $scope.text = data + ' hello';
    };
});

App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/home.html',
            controller: 'HomeController'
        })
        .when('/post', {
            templateUrl: '/post.html',
            controller: 'PostController'
        })
        .when('/terr', {
            templateUrl: '/terrarium.html',
            controller: 'TerrController'
        })
        .otherwise({
            redirectTo: '/home.html'
        });
});





App.controller('HomeController', function ($scope) {
    $scope.classifieds = [
        {
            "id": "1",
            "title": "20 Foot Equipment Trailer",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam animi\n" +
            "                        architecto aut autem commodi culpa cum debitis dignissimos dolore dolorem doloremque fuga fugiat\n" +
            "                        harum illo, incidunt ipsa itaque magni maxime minima mollitia nam necessitatibus nemo nobis odit\n" +
            "                        qui quidem reiciendis reprehenderit sint tempora ullam veritatis voluptatem. Deserunt eaque\n" +
            "                        exercitationem illum iusto labore natus, provident quisquam sint ullam voluptates! Animi commodi\n" +
            "                        dolorum in iste iure iusto maxime modi molestiae nobis odit officiis pariatur perspiciatis\n" +
            "                        placeat porro praesentium provident quaerat, qui repellat reprehenderit sint sunt tempore unde\n" +
            "                        ut voluptas voluptates! Architecto eos labore laborum laudantium maiores mollitia quidem,\n" +
            "                        quisquam sunt!",
            "price": "6000",
            "posted": "2017.09.30",
            "email": "jectpro55@gmail.com",
            "categories": [
                "Vehicles",
                "Part and Accessories"
            ],
            "image": "/anglr_img/moto4.jpg"
        }

    ]
});



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
            var promise = $http.get('js/getTerr.json').then(function (response) {
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

