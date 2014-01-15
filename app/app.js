angular.module("powerUpPanels", ["ngRoute"]).config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/select-world", {
		controller: "selectWorldController",
		templateUrl: "app/select-world/select-world.html"
	}).when("/select-coordinate", {
		controller: "selectCoordinateController",
		templateUrl: "app/select-coordinate/select-coordinate.html"
	}).when("/select-panel", {
		controller: "selectPanelController",
		templateUrl: "app/select-panel/select-panel.html"
	}).otherwise({
		redirectTo: "/select-world"
	});
}]);