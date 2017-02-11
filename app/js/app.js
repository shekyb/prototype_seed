var app = angular.module('app', ['ui.router', 'ConsoleLogger']).run(['PrintToConsole', function(PrintToConsole) {
    PrintToConsole.active = false;
}]);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
	$stateProvider.state('home', {
		name: 'home',
		url: '/',
		templateUrl: 'partials/home.html',
		controller: function(){
			
		}
	})
	
	$locationProvider.html5Mode(true);
}])