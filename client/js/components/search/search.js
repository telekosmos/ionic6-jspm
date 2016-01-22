"use strict";

import angular from 'angular';
import 'angular-ui-router';
// import TextContent from '../textContent/textContent';

import searchComponent from './search.component';
import SearchController from './search.controller';
import template from './search.html!text';
import './search.css!';

import {factory} from '../../common/helper';

let searchModule = angular.module('search', [
	'ui.router'
]);
searchModule.config(($stateProvider, $urlRouterProvider) => {
	// $urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('root.search', { 
			url: '/search',
			views: {
				'menuContent': {
					template: template,		
					// templateUrl: factory.resolveToTemplate('components/search'),
					controller: 'SearchController',
					controllerAs: 'search'
				}
			}
			
		});
});
searchModule.controller('SearchController', SearchController);
searchModule.directive('search', searchComponent);

export default searchModule;