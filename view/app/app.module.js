(function (){
	'use strict';

	angular.module('Services', []);
	angular.module('Chat', []);
	angular.module('Team', []);
	
	angular.module('tresmuju', [
			'ui.router',
			'Services',
			'Chat',
			'Team'

	]);

})();