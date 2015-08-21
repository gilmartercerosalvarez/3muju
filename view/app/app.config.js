(function () {
    'use strict';

    angular
        .module('tresmuju')
        .config([
            '$urlRouterProvider',
            //'RestangularProvider',
            AppConfiguration
        ]);

    function AppConfiguration($urlRouterProvider) {
        $urlRouterProvider.otherwise('/team');

        /*
        RestangularProvider.setBaseUrl('http://localhost/works/3muju/restApi');

        RestangularProvider.addResponseInterceptor(function(serverResponse, operation, what, url, response, deferred) {
            return serverResponse.data;
        });
            */
    }

})();