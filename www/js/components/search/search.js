import angular from 'angular';
import 'angular-ui-router';
import searchComponent from './search.component';
import SearchController from './search.controller';

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
					// template: '<search></search>'		
					// templateUrl: resolveTemplate('components/search');
					templateUrl: factory.resolveToTemplate('components/search'),
					controller: 'SearchController'
				}
			}
			
		});
});
searchModule.controller('SearchController', SearchController);
searchModule.directive('search', searchComponent);

export default searchModule;