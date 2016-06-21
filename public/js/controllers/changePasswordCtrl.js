angular.module('fitnessApp')
.controller('changePasswordCtrl', function($scope,$state,services,$http){
    
     $scope.myForm={};
 
    $scope.submit=function(){
    
    if($scope.myForm.oldP == services.logID.data.user.adminpsw)
        {
        alert("Successfully Changed");    
          $http.post('api/change', {
         _id: services.logID.data.user._id,
         newpwd: $scope.myForm.newpwd,
              
      })
      .then(function(success){
              $state.go('dashBoard')
              
     
      })
        }
        else{
            
            alert("unmatched");
        }
    
    }
    
    
});