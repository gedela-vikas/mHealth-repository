angular.module('fitnessApp')
.controller('coachListCtrl', function($scope, $state ,$http, fetchService){
     $scope.search={};
/* $scope.coachprofile=function(){*/
     fetchService.alluserDetails("COACH").then(function(success){
     /* console.log(success);*/
      $scope.alluserDetails = success.data;
    },function(error){
     /* console.log(error);*/
    });

    $scope.coachdelete=function(_id){
        /* console.log("id in ctrk"+_id);*/
     alert("Do you wan to Delete This Client?");
      if (confirm("Delete?") == true) {
       /* console.log("aaa---->>"+_id);*/
        $http.post('api/delete', {
         _id: _id,
        })
        .then(function(success){
          console.log(success);
        },function(error){
          console.log(error);
        })
      }
         $state.go("dashBoard.coachList");
     }
    
})