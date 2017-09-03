"use strict";

angular.module("tastyFitnessWelcomeModule",["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
	.state('Sign Up',{
		url:'/newUser',
		views:{
			"templatingSection":{
				templateUrl : 'templates/signUp.html',
				controller : 'signUpController',		
			}
		}
	})
	.state('Login',{
		url:'/login',
		views:{
			"templatingSection":{
				templateUrl : "templates/login.html",
				controller : "loginController",
			}
			}
	})
})


.controller('headerController', function($scope, $http, $state) {

	$scope.appName = "Tasty Fitness";
	
	var loginOptions = ["Sign Up", "Login", "About us" ];
	
	$scope.loginOptions = loginOptions;
	
	$scope.stateRedirector = function(state){
		
		alert(state)
		$state.go(state);
	};
	
})
	
	
.controller('footerController', function($scope, $http){
	
	var mediaOptions = [{url:"https://www.facebook.com", classN:"fa fa-facebook"},{url:"https://twitter.com/", classN:"fa fa-twitter"},{url:"https://www.google.co.in", classN:"fa fa-google"}];
	
	$scope.contactUs = "Contact Us";
	$scope.mediaOptions = mediaOptions;
})

.controller('signUpController', function($scope, $http){
	
	
	
})

.controller('loginController', function($scope, $http){
	
	
	
});	
