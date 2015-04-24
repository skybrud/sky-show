/* global angular */
interface Window {
    Modernizr?: any;
};


(function () {
	'use strict';

	angular.module('skyShow',[]);

	/* Add the window.Modernizr object to the angular module as a constant */
	if (window.Modernizr) {
		angular.module('skyShow').constant("Modernizr", window.Modernizr);
	}

	// BEWARE: this requires Modernizr for the actual feature-detection

})();
