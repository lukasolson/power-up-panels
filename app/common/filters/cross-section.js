angular.module("powerUpPanels").filter("crossSection", function () {
	return function (grids, row, col) {
		var crossSection = [];
		for (var i = 0; i < grids.length; i++) {
			crossSection.push(grids[i][row][col]);
		}
		return crossSection;
	};
});