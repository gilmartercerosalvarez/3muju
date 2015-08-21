(function(){
	'use strict';

	angular
		.module('tresmuju')
		.run([RunApplication]);

	function RunApplication(){
		console.log('The application is up');
	}

})();