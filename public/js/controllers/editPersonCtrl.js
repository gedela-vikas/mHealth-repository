angular.module('fitnessApp')
.controller('editPersonCtrl', function($scope, $state, $stateParams, promise_apis){
	console.log($stateParams);
	$scope.person=$stateParams.personDetails;
	$scope.updatePerson=function(){
		var data=$scope.person;
		promise_apis.editData("/people",data)
		.then(function(data) {
		    console.log(data);
		    $state.go('^');
		})
		.catch(function(data) {
	    	console.error(data);
		});
	}
});