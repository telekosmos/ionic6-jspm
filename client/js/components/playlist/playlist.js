'use strict';

import angular from 'angular';
import 'angular-ui-router';
import playlistComponent from './playlist.component';
import PlaylistCtrl from './playlist.controller';
import template from './playlist.html!text';

import {factory} from '../../common/helper';

let playlistModule = angular.module('playlist', [
	'ui.router'
]);

playlistModule.config(($stateProvider, $urlRouterProvider) => {
	
	$stateProvider
		.state('root.playlist', { 
			url: '/playlists/:playlistId',
			views: {
				'menuContent': {
					template: template,		
					// templateUrl: factory.resolveToTemplate('components/playlist'),
					controller: 'PlaylistCtrl',
					controllerAs: 'playlist'
				}
			}
			
		});
});

playlistModule.directive('playlist', playlistComponent);
playlistModule.controller('PlaylistCtrl', PlaylistCtrl);

export default playlistModule;