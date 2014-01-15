angular.module("powerUpPanels").filter("aggregatePanel", function () {
	return function (panels) {
		if (_.uniq(panels).length === 1) return panels[0];
		if (_.contains(panels, 7) || _.contains(panels, 8)) return "unsafe"; // See services/panel-combinations.js
		return "safe";
	};
});