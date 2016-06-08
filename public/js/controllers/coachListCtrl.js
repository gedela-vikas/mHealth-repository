angular.module('fitnessApp')
.controller('coachListCtrl', function($scope, $state ,$http, fetchService){
     $scope.search={};
/* $scope.coachprofile=function(){*/
     fetchService.alluserDetails("COACH").then(function(success){
      console.log(success);
      $scope.alluserDetails = success.data;
    },function(error){
      console.log(error);
    });
 /*    }*/
    
})