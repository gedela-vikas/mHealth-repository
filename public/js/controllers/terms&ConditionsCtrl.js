angular.module('fitnessApp')
.controller('terms&ConditionsCtrl', function($scope, tcService, $state ,$http){
  
    
    tcService.termsConditions("terms").then(function(success){
      console.log(success);
      $scope.termsConditions = success.data[0];
        
    },function(error){
      console.log(error);
    });
  
});