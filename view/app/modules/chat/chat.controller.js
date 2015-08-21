(function (){
	'use strict';

	angular
		.module('Chat')
		.controller('ChatController', [
			'MessageService',
			ChatController
		]);
	
	function ChatController(MessageService){
		var vm = this;
		vm.newMessage = '';
		vm.userId = '';
		vm.openUserSession = openUserSession
		vm.updateListMessage = updateListMessage;
		vm.sessions = [];	

		MessageService.getUserConected()
			.then(onUsersSuccess)
			.catch(error);

		function onUsersSuccess(data){
			for( var i = 0; i < data.length; i++){
				var session = {
						id: i,
						listMessages: [],
						userName: data[i],
					}
				vm.sessions.push(session);	
			}
		}

		function openUserSession(userId){
			vm.userId = userId;
		}
		function updateListMessage(){
			var date = new Date();
			var time = date.toDateString() + ' ' + date.getHours() + ':'+ date.getMinutes();
			var newMessage = {
				content: vm.newMessage,
				hour: time
			}
			vm.sessions[vm.userId].listMessages.push(newMessage);
			vm.newMessage = '';
			MessageService.reponseMessageFromServer()
					.then(onSuccess)
					.catch(error);
		}

		function onSuccess(data){
			vm.sessions[vm.userId].listMessages.push(data);
		}
		function error(){
			alert('somethong was wrong!!!');
		}

	};

})();