angular.module('fitnessApp')
.controller("userListCtrl",function($scope, $state ,$http, fetchService){
    $scope.search={};
  /*  $scope.userprofile=function(){*/
      
      fetchService.alluserDetails("USER").then(function(success){
      console.log(success);
      $scope.alluserDetails = success.data;
    },function(error){
      console.log(error);
    });
        
 /*}*/

});