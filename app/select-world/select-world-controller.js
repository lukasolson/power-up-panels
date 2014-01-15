angular.module("powerUpPanels").controller("selectWorldController", function (PanelCombinations, $rootScope, $location, $scope) {
	$scope.worlds = PanelCombinations;

	$scope.selectWorld = function (world) {
		$rootScope.panelCombinations = PanelCombinations[world];
		return $location.path("/select-coordinate");
	};
});