angular.module('fitnessApp')
.controller("loginCtrl",function($scope, $state, loginService){
     $scope.reg = function () {
      
    };
   
    $scope.myForm = {};
    $scope.login = function () {
        loginService.user($scope.myForm).then(function (ObjS) {
            alert('Welcome! ADMIN');
            $state.go("dashBoard");
        }, function (ObjE) {
            alert('sorry your username or password is incorect...!');
            console.log("Error : " + JSON.stringify(ObjE));

        })
}
});

