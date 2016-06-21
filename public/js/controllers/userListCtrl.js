angular.module('fitnessApp')
.controller("userListCtrl",function($scope, $state ,$http, fetchService){
    $scope.search={};
   
      fetchService.alluserDetails("USER").then(function(success){
      console.log(success);
      $scope.alluserDetails = success.data;
    },function(error){
      console.log(error);
    })
    
     $scope.userdelete=function(_id){
       /*  console.log("id in ctrk"+_id);*/
     alert("Do you wan to Delete This Client?");
      if (confirm("Delete?") == true) {
      /*  console.log("aaa---->>"+_id);*/
        $http.post('api/delete', {
         _id: _id,
        })
        .then(function(success){
          console.log(success);
        },function(error){
          console.log(error);
        })
      }
         $state.go("dashBoard.userList");
     }
});