angular.module('fitnessApp')
.controller('editprivacyPolicyCtrl', editprivacyPolicyCtrl);
editprivacyPolicyCtrl.$inject = ['$scope', 'ppService', '$stateParams', '$http', '$state'];

    function editprivacyPolicyCtrl($scope, ppService, $stateParams, $http, $state) {
        
  /*  console.log("-----------gjjgjjjjjhjh--------------"+JSON.stringify($stateParams));*/
    $scope.ppUpdate = {};
     
   $scope.ppUpdate = $stateParams.policies;
      /*  console.log("aaaaa----------"+JSON.stringify($scope.ppUpdate));*/
    $scope.update = function(editedText) {
        alert("Updated Successfully")
     /* console.log($scope.ppUpdate.usertype+"CONSOLE EDITCTRL");*/
      $http.post('api/ppsave', {
          
         usertype: "privacyPolicy",
          
        pp: editedText
      })
      .then(function(success){
        console.log(success);
      },function(error){
        console.log(error);
      });
      $state.go('dashBoard.privacyPolicy');
    };
        
    
  }




