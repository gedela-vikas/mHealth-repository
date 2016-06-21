angular.module('fitnessApp')
.controller('privacyPolicyCtrl', function($scope, ppService, $state ,$http){
    
     ppService.policies("privacyPolicy").then(function(success){
      console.log(success);
      $scope.policies = success.data[0];
        
    },function(error){
      console.log(error);
    });
    
})