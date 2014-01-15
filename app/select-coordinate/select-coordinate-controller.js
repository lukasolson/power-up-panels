angular.module("powerUpPanels").controller("selectCoordinateController", function ($rootScope, $location, $scope) {
	if (typeof $rootScope.panelCombinations === "undefined") {
		return $location.path("/");
	}

	$scope.selectCoordinate = function (row, col) {
		$rootScope.coordinate = {row: row, col: col};
		return $location.path("/select-panel");
	};

	$scope.reset = function () {
		delete $rootScope.coordinate;
		delete $rootScope.panelCombinations;
		return $location.path("/");
	};
});