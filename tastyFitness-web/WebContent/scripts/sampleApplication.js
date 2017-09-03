
"use strict";
angular.module('sampleApplication', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
	
	
	$stateProvider
	
	.state('login',{
		url:'/login',
		views:{
			
			"userLoginOptionView":{
				templateUrl : 'templates/loginUser.html',
				controller : 'loginController',		
			}
		}
	})
	.state('logout',{
		url:'/',
		views:{
			"userLoginOptionView":{
			}
		}
		
	})
	
	
	.state('userHome',{
		
		url:'/userHome',
		views:{
			
			"optionSection" : {
				
				templateUrl : 'templates/optionTemplate.html',
				controller: 'optionController'
			},
			
			"templateSection" : {
				templateUrl : 'templates/diet.html'
			}
		}
	});
})

.controller('mainController', function($rootScope,$scope){
	
	$rootScope.optionsView = "true";
	$rootScope.templateView = "true";
	
})



.controller('optionController', function($rootScope, $scope){
	
	$scope.userOptions = [{"title":"Option 1"},{"title":"Option 2"},{"title" : "Option 3"}];
	
	$scope.openOption = function(optionName){
		
		alert("Clicked "+optionName);
		
	};
	
})

.controller('headerController', function($rootScope, $scope, $state){
	
	$scope.SignUp = "Sign Up";
	$scope.Login = "Login";
	$scope.Logout = "Logout";
	
	
	$scope.loginUser = function(){
		
		$state.go('login');
		
	};

	$rootScope.$on('loggedIn', function(events, args){
		
		$scope.showLogin = args;
		
	});
	
	$scope.logOutUser = function(){
		
		$state.go('logout');
		$scope.showLogin = "false";
	}
	
	
})

.controller('loginController', function($rootScope, $scope, $state, $http){
	
	$scope.login = function(){
		
		var user = {
				
				username : $scope.login.username,
				password : $scope.login.password
		};
		
		$http({
    method: 'POST',
    url: 'http://localhost:8090/SampleApplication/loginUser',
    data: user,
    headers: {'Content-Type': 'application/json'}
	}).success(function (response) {
		alert(response);
		
		$state.go('userHome');
		
		$rootScope.$emit('loggedIn',"true");
		
		
	});
	
	};
});