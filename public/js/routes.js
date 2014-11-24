define([
    'app',
	'controllers/loginControl',
    'controllers/indexControl'
], function(app, loginControl, indexControl){

    return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

        $routeProvider
            .when('/login', {
                controller: loginControl,
                templateUrl: '<h1>1111111111111111</h1>'
            })
            .when('/indexControl', {
                controller: indexControl,
                templateUrl: '222222222222222'
            }).
            otherwise({redirectTo:'/'});
    }]);
});