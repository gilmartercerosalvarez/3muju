(function(){
	'use strict';

		angular
			.module('Services')
			.service('MessageService', [
				'$q',
				MessageService
				]);

		function MessageService($q){
			var messageService = {};

			messageService.reponseMessageFromServer = function(){
				var deferred = $q.defer();
				deferred.resolve(buildMessage());
				return deferred.promise;
			};
			messageService.getUserConected = function(){
				var deferred = $q.defer();
				deferred.resolve(USERS());
				return deferred.promise;
			};
			return messageService;
		}

		function buildMessage(){
			var date = new Date();
			var time = date.toDateString() + ' ' + date.getHours() + ':'+ date.getMinutes();
			var message = {
				content: 'Message from server',
				hour: time
			}
			return message;
		}

		function USERS(){
			var users = ['Luffy','Nami','Robin','Usop','Choper','Sanji','Zoro','Franki','Brook'];
			return users;
		}

})();