angular.module('fitnessApp')
.controller('changePasswordCtrl', function($scope,$state,services,$http){
    
     $scope.myForm={};
 
    $scope.submit=function(){
    if($scope.myForm.oldP == services.logID.data.administrator.adminpsw)
        {
        alert("Successfully Changed");    
          $http.post('api/change', {
         _id: services.logID.data.administrator._id,
         newpwd: $scope.myForm.newpwd,
              
      })
      .then(function(success){
              $state.go('login')
      })
        }
        else{
            alert("unmatched");
        }
    }
});