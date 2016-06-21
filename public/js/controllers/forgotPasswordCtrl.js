angular.module('fitnessApp')
.controller("forgotPasswordCtrl",function($scope, $state, forgotService){
    
     $scope.myForm = {};
      $scope.forgotPassword = function () {
            forgotService.user($scope.myForm).then(function (ObjS) {
              alert('ok! we are sending Email');
             }, function (ObjE) {
                alert('sorry your id does not exist');
                console.log("Error : " + JSON.stringify(ObjE));
 })
}
    
});