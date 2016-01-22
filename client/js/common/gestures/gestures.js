'use strict';

import angular from 'angular';
import 'angular-ui-router';
import gesturesComponent from './gestures.component';
import GesturesCtrl from './gestures.controller';

import {factory} from '../../common/helper';

let gesturesModule = angular.module('gestures', [
	'ui.router'
]);
/*
gesturesModule.config(($stateProvider, $urlRouterProvider) => {
	
	$stateProvider
		.state('root.gestures', { 
			url: '/gestures',
			views: {
				'menuContent': {
					// template: '<search></search>'		
					// templateUrl: resolveTemplate('components/search');
					templateUrl: factory.resolveToTemplate('common/gestures'),
					controller: 'GesturesCtrl',
					controllerAs: 'gestures'
				}
			}
			
		});
});
*/
gesturesModule.directive('gestures', gesturesComponent);
// gesturesModule.controller('GesturesCtrl', GesturesCtrl);

export default gesturesModule;