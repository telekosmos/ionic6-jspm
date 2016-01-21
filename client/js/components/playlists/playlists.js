'use strict';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-sanitize';

import playlistsComponent from './playlists.component';
import PlaylistsCtrl from './playlists.controller';
import template from './playlists.html!text';

import {factory} from '../../common/helper';

let playlistsModule = angular.module('playlists', [
	'ui.router', 'ngSanitize'
]);
playlistsModule.config(($stateProvider, $urlRouterProvider) => {
	// $urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('root.playlists', { 
			url: '/playlists',
			views:{
				'menuContent': {
					template: template,
					// templateUrl: factory.resolveToTemplate('components/playlists'),
					controller: 'PlaylistsCtrl',
					controllerAs: 'playlists'
				}
			} 
		});
});

playlistsModule.directive('playlists', playlistsComponent);
playlistsModule.controller('PlaylistsCtrl', PlaylistsCtrl);

export default playlistsModule;