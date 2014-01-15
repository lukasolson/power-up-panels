angular.module("powerUpPanels").controller("selectPanelController", function ($rootScope, $location, $scope) {
	if (typeof $rootScope.panelCombinations === "undefined" || typeof $rootScope.coordinate === "undefined") {
		return $location.path("/");
	}

	$scope.panels = _.uniq(_.map($rootScope.panelCombinations, function (panelCombination) {
		return panelCombination[$rootScope.coordinate.row][$rootScope.coordinate.col];
	}));

	$scope.selectPanel = function (panel) {
		$rootScope.panelCombinations = _.filter($rootScope.panelCombinations, function (panelCombination) {
			return panelCombination[$rootScope.coordinate.row][$rootScope.coordinate.col] === panel;
		});
		return $location.path("/select-coordinate");
	};
});