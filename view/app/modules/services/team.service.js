(function(){
	'use strict';

		angular
			.module('Services')
			.service('TeamService', [
				'$q',
				'$http',
				TeamService
			]);

		function TeamService($q, $http){
			var teamService = {};
			var TEAM_RESOURCE = 'http://localhost/works/3muju/restApi/CustomerController.php?x=';

			teamService.getTeamList = function(){
        		return $http.get(TEAM_RESOURCE + 'getCustomers');
    		}
			/*
			Restangular.extendModel(TEAM_RESOURCE, function(serverModel) {
            angular.extend(serverModel);
            return serverModel;
        	});

			teamService.getTeamList = function(){
				return Restangular.all(TEAM_RESOURCE).getList();
			}
			*/
			/*
			teamService.getTeamList = function(){
				var deferred = $q.defer();
				deferred.resolve(TEAMLIST());
				return deferred.promise;
			}
			*/
			return teamService;
		}

		function TEAMLIST(){
			var teamList = [
				{
					idTeam: 1,
					name: 'Juvenil Tolata',
					zona: 'Zona Central',
					galleryTeam: [],
					shield: 'image/shiled.jpg',
					players: PLAYERLIST().length
				},
				{
					idTeam: 2,
					name: 'Real Tolata',
					zona: 'Zona Central',
					galleryTeam: [],
					shield: 'image/shiled.jpg',
					players: PLAYERLIST().length
				}
			];
			return teamList;
		}
		function PLAYERLIST(){
			var playerList = [
				{
					firstName: 'Gilmar',
					lastName: 'Terceros',
					age: 23,
					phone: 76407844,
					position: 'Delantero',
					address: 'calle Rosales',
					photo: 'images/name.jpg',
					anotations: 6,
					blastRed: 0,
					blastYellow: 0,
					fouls: 5
				},
				{
					firstName: 'Gilmar',
					lastName: 'Terceros',
					age: 23,
					phone: 76407844,
					position: 'Delantero',
					address: 'calle Rosales',
					photo: 'images/name.jpg',
					anotations: 6,
					blastRed: 0,
					blastYellow: 0,
					fouls: 5
				},
				{
					firstName: 'Gilmar',
					lastName: 'Terceros',
					age: 23,
					phone: 76407844,
					position: 'Delantero',
					address: 'calle Rosales',
					photo: 'images/name.jpg',
					anotations: 6,
					blastRed: 0,
					blastYellow: 0,
					fouls: 5
				}
			];
			return playerList;
		}

})();