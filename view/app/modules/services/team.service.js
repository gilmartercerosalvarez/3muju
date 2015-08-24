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
            return teamService;
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