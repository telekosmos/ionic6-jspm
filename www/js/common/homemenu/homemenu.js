import angular from 'angular';
import 'angular-ui-router';
import homemenuComponent from './homemenu.component';

let homemenuModule = angular.module('homemenu', [
	'ui.router'
]);

homemenuModule = homemenuModule.config(($stateProvider, $urlRouterProvider) =>{ 
	$urlRouterProvider.otherwise('/root/home');
	
	$stateProvider
		.state('root', { 
			url: '/root',
			abstract: true,
			template: '<home-menu></home-menu>'
		});
});

// <home-menu/>, directiva for sidemenu
homemenuModule.directive('homeMenu', homemenuComponent);

export default homemenuModule;