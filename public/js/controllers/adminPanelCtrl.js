angular.module('fitnessApp')
.controller('adminPanelCtrl', function($scope, $state, promise_apis){
	promise_apis.getData("/people")
	.then(function(data) {
	    console.log(data);
	    $scope.people=data
	})
	.catch(function(data) {
    	console.error(data);
	});
	$scope.changeStatus=function(person){
		promise_apis.changeData("/changeStatus",person)
		.then(function(data) {
		    console.log(data);
		    $state.go('^');
		})
		.catch(function(data) {
	    	console.error(data);
		});
	}
});