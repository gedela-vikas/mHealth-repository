angular.module('fitnessApp')
.controller('surveysCtrl', function($scope,promise_apis){
	$scope.surveyList=function() {
		console.log($scope.selectedPerson);
		promise_apis.surveysList("/surveysList",$scope.selectedPerson)
		.then(function(success) {
		    console.log(success);
		    $scope.surveys=success;
		})
		.catch(function(error) {
	    	console.error(error);
		});	
	}
	$scope.questionList=function() {
		if($scope.selectedPerson._id==$scope.selectedSurvey.userID){
			$scope.answer=$scope.selectedSurvey;
			promise_apis.getData("/questions")
			.then(function(success) {
			    console.log(success);
			    $scope.questions=success;
			})
			.catch(function(error) {
		    	console.error(error);
			});
		}else{
			$scope.answer={};
			$scope.questions={};
		}
	}
	$scope.edit=function(QNo,Q,ans,_id){
		var a=prompt(Q,ans);
		if((a!=ans)&&(a)){
			promise_apis.updateData("/surveys",QNo,a,_id)
			.then(function(success) {
			    console.log(success);
			    $scope.answer=success;
			})
			.catch(function(error) {
		    	console.error(error);
			});
		}
	}
	promise_apis.getData("/people")
	.then(function(success) {
	    console.log(success);
	    $scope.people=success;
	})
	.catch(function(error) {
    	console.error(error);
	});
	$scope.selectedPerson;
	$scope.selectedSurvey;
});
