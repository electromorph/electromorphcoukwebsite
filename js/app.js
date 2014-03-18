var myapp = angular.module('myapp', ['firebase']);
var controllers = {};

myapp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/one', {
			templateUrl: 'templates/one.html',
			controller: 'ImperialCtrl'
			}).
		when('/two', {
			templateUrl: 'templates/two.html',
			controller: 'MetricCtrl'
			}).
		when('/three', {
			templateUrl: 'templates/three.html',
			controller: 'MetricCtrl'
			}).
		when('/four', {
			templateUrl: 'templates/four.html',
			controller: 'BookCtrl'
			}).
		otherwise ({
			redirectTo: '/one'
		});
	}]);

controllers.BookCtrl = function ($scope, angularFire) {
    var url = 'https://popping-fire-6259.firebaseio.com/books';
    var promise = angularFire(url, $scope, 'books', []);
    $scope.newBook = {};
    promise.then(function() {
      startWatchBook($scope);
    });
  };
  
  controllers.ImperialCtrl = function ($scope, angularFire) {
    var url = 'https://popping-fire-6259.firebaseio.com/shaftconverters/imperialpossibilities';
	var promise = angularFire(url, $scope, 'imperialpossibilities', []);
	$scope.measurement = {};
	promise.then(function() {
      startWatchImperial($scope);
    });
  };
  
  controllers.MetricCtrl = function ($scope, angularFire) {
    var url = 'https://popping-fire-6259.firebaseio.com/shaftconverters/metricpossibilities';
	var promise = angularFire(url, $scope, 'metricpossibilities', []);
	$scope.measurement = {};
	promise.then(function() {
      startWatchMetric($scope);
    });
  };

  myapp.controller(controllers);

function startWatchBook($scope) {  
  $scope.add = function() {
    console.log($scope.newBook);
    $scope.books.push($scope.newBook);
    $scope.newBook = '';
  }
}

function startWatchImperial($scope) {  
  $scope.add = function() {
    console.log($scope.measurement);
    $scope.imperialpossibilities.push($scope.measurement);
    $scope.measurement = '';
  }
}

function startWatchMetric($scope) {  
  $scope.add = function() {
    console.log($scope.measurement2);
    $scope.metricpossibilities.push($scope.measurement2);
    $scope.measurement2 = '';
  }
}