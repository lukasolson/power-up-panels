angular.module("powerUpPanels").directive("onTap", function () {
	return function (scope, element, attributes) {
		var tapped = false;

		element.on("touchstart", function () {
			tapped = true;
		});

		element.on("touchmove", function () {
			tapped = false;
		});

		element.on("touchend", function () {
			if (tapped) scope.$evalAsync(attributes["onTap"]);
		});
	};
});