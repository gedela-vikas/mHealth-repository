angular.module('fitnessApp')
.controller('editTermsConditionsCtrl', editTermsConditionsCtrl);
editTermsConditionsCtrl.$inject = ['$scope', 'tcService', '$stateParams', '$http', '$state'];

    function editTermsConditionsCtrl($scope,  tcService, $stateParams, $http, $state) {
  /*  console.log("-----------gjjgjjjjjhjh--------------"+JSON.stringify($stateParams));*/
    $scope.tcUpdate = {};
     
   $scope.tcUpdate = $stateParams.termsConditions;
     /*   console.log("aaaaa----------"+JSON.stringify($scope.tcUpdate));*/
    $scope.update = function(editedText) {
        alert("Updated Successfully")
     /* console.log($scope.tcUpdate.usertype+"CONSOLE EDITCTRL");*/
      $http.post('api/tcsave', {
          
         usertype: "terms",
          
        tc: editedText
      })
      .then(function(success){
        console.log(success);
      },function(error){
        console.log(error);
      });
      $state.go('dashBoard.terms&Conditions');
    };
        
    
  }






















        
    
  





















