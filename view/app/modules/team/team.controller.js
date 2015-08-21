(function (){
	'use strict';

	angular
		.module('Team')
		.controller('TeamController', [
			'TeamService',
			TeamController
		]);

	function TeamController(TeamService){
		var vm = this;
		vm.teamList = [];

		TeamService.getTeamList()
			.then(onTeamSuccess)
			.catch(error);

		function onTeamSuccess(data){
			vm.teamList = data.data.data;
		}
		
		function error(){
			alert('Somethong was wrong!!!');
		}
	}


})();