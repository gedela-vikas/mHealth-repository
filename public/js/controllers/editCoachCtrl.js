angular.module('fitnessApp')
.controller('editCoachCtrl', editCoachCtrl);
editCoachCtrl.$inject = ['$scope', 'readService', '$stateParams', '$http', '$state'];

 
    function editCoachCtrl($scope,  readService, $stateParams, $http, $state) {
   /* console.log($stateParams.alluserDetails);*/
    $scope.coachUpdate = {};
     
   $scope.coachUpdate = $stateParams.alluserDetails;
    $scope.update = function() {
        alert("Updated Successfully")
     /* console.log($scope.coachUpdate.email+"CONSOLE EDITCTRL");*/
      $http.post('api/edit', {
          
         _id: $stateParams.alluserDetails._id,
          
        firstname: $scope.coachUpdate.firstname,
          
        lastname: $scope.coachUpdate.lastname,
          
        email: $scope.coachUpdate.email,
          
        contact: $scope.coachUpdate.contact,
          
        age: $scope.coachUpdate.age,
      })
      .then(function(success){
        console.log(success);
      },function(error){
        console.log(error);
      });
      $state.go('dashBoard.coachList');
    };
        
    
  }





















