(function(){
	'use strict';

	angular
		.module('Chat')
		.config([
			'$stateProvider',
			ChatConfiguration
			]);

		function ChatConfiguration($stateProvider){
			var chat = {
				name: 'chat',
				url: '/chat',
				templateUrl: 'app/modules/chat/chat.template.html',
				controller: 'ChatController',
				controllerAs: 'ChatController'
			}

			$stateProvider.state(chat);
		}
})();