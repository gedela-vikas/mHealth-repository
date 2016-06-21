angular.module('fitnessApp')
.controller('editUserCtrl', editUserCtrl);
editUserCtrl.$inject = ['$scope', 'readService', '$stateParams', '$http', '$state'];

 
    function editUserCtrl($scope,  readService, $stateParams, $http, $state) {
 /*   console.log($stateParams.alluserDetails);*/
    $scope.userUpdate = {};
     
   $scope.userUpdate = $stateParams.alluserDetails;
    $scope.update = function() {
        alert("Updated Successfully")
      /*console.log($scope.userUpdate.email+"CONSOLE EDITCTRL");*/
      $http.post('api/edit', {
          
         _id: $stateParams.alluserDetails._id,
          
        firstname: $scope.userUpdate.firstname,
          
        lastname: $scope.userUpdate.lastname,
          
        email: $scope.userUpdate.email,
          
        contact: $scope.userUpdate.contact,
          
        age: $scope.userUpdate.age,
      })
      .then(function(success){
        console.log(success);
      },function(error){
        console.log(error);
      });
      $state.go('dashBoard.userList');
    };
        
    
  }





















