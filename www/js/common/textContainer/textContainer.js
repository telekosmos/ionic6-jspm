'use strict';

import angular from 'angular';
import 'angular-ui-router';
import textContainerComponent from './textContainer.component';
import textContainerBehavior from './textContainer.behavior';
import TextContainerCtrl from './textContainer.controller';
import './textContainer.css!';

import {factory} from '../../common/helper';

let textContainerModule = angular.module('textContainer', [
	'ui.router'
]);

textContainerModule.config(($stateProvider, $urlRouterProvider) => {
	
	$stateProvider
		.state('root.textContainer', { 
			url: '/textContainer',
			views: {
				'menuContent': {
					// template: '<search></search>'		
					// templateUrl: resolveTemplate('components/search');
					templateUrl: factory.resolveToTemplate('common/textContainer'),
					controller: 'TextContainerCtrl', // as textCtrl',
					controllerAs: 'textCtrl'
				}
			}
		});
});

textContainerModule.directive('textContainer', textContainerComponent);
textContainerModule.directive('detectGestures', textContainerBehavior);
textContainerModule.controller('TextContainerCtrl', TextContainerCtrl);

export default textContainerModule;