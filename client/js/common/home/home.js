'use strict';

import angular from 'angular';
import 'angular-ui-router';
import template from './home.html!text';
import homeComponent from './home.component';
import HomeController from './home.controller';
import helper, {factory} from '../helper';

// console.log(helper.ROOT_JS);
let homeModule = angular.module('home', [
	'ui.router'
]);

homeModule.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/root/home');
	
	$stateProvider
		.state('root.home', { 
			url: '/home',
			views: {
				'menuContent': {
					template: template,
					// templateUrl: factory.resolveToTemplate('common/home'), // 'js/common/home/home.html',
					controller: 'HomeController',
					controllerAs: 'home'
				}
			}
		});
});
homeModule.directive('home', homeComponent);
homeModule.controller('HomeController', HomeController);

export default homeModule;