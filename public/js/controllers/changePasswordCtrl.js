angular.module('fitnessApp')
.controller('changePasswordCtrl', function($scope,$state,services,$http){
    
    
     $scope.myForm={};
    console.log(services.logID.data.user.pwd);
    $scope.new=function(){
    
    if($scope.myForm.oldP == services.logID.data.user.pwd)
        {
        alert("matched");    
          $http.post('/change', {
         _id: services.logID.data.user._id,
         newpwd: $scope.myForm.newpwd,
              
      })
      .then(function(success){
        console.log(error);
      });
        }
        else{
            
            alert("unmatched");
        }
        
    
       
    }
    
    
});