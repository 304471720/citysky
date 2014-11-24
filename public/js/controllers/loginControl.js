define(['app', 'plunins'], function (app, plunins) {

    var dialog = plunins.dialog;

    return app.controller('loginControl', ['$scope', '$http', '$location', function($scope, $http, $location){

        $scope.checkLogin = function(){

            var user = {};

            if(!(user.username = $scope.username)){
                dialog.alert('用户名不能为空');
                return;
            }

            if(!(user.password = $scope.password)){
                dialog.alert('密码不能为空');
                return;
            }

            $http.post('/checkLogin', user).success(function(){

                location.href = '/index';
            }).error(function(){
                
                location.href = '/index';
            });
        }
    }]);
});