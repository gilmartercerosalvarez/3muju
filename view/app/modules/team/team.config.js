(function (){
	'use strict';

	angular
		.module('Team')
		.config([
			'$stateProvider',
			TeamConfiguration
		]);

	function TeamConfiguration($stateProvider){
		var team = {
			name: 'team',
			url: '/team',
			templateUrl: 'app/modules/team/team.template.html',
			controller: 'TeamController',
			controllerAs: 'TeamController'

		};
		$stateProvider.state(team);
	}

})();