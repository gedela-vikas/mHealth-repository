angular.module('fitnessApp')
.controller('viewCoachCtrl', function($scope,$state,$stateParams,userdetailService,$http){
    
 userdetailService.alluserDetails($stateParams.id).then(function(success){
    /*  console.log("sssss----"+JSON.stringify(success));*/
      $scope.alluserDetails = success.data;
      /*   console.log("sssss----"+JSON.stringify(success.data));*/
    },function(error){
      console.log(error);
    });


})

