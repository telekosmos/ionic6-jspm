'use strict';

import angular from 'angular';
import 'angular-ui-router';
import autocompleteComponent from './autocomplete.component';
import AutocompleteCtrl from './autocomplete.controller';

import {factory} from '../../common/helper';

let autocompleteModule = angular.module('autocomplete', [
	'ui.router'
]);
/*
autocompleteModule.config(($stateProvider, $urlRouterProvider) => {
	
	$stateProvider
		.state('root.autocomplete', { 
			url: '/autocomplete',
			views: {
				'menuContent': {
					// template: '<search></search>'		
					// templateUrl: resolveTemplate('components/search');
					templateUrl: factory.resolveToTemplate('common/autocomplete'),
					controller: 'AutocompleteCtrl',
					controllerAs: 'autocomplete'
				}
			}
			
		});
});
*/
autocompleteModule.directive('autocomplete', 
	['$parse', '$http', '$sce', '$timeout', autocompleteComponent]
);
// autocompleteModule.controller('AutocompleteCtrl', AutocompleteCtrl);

export default autocompleteModule;