'use strict';

import angular from 'angular';
import 'angular-ui-router';
import textContentComponent from './textContent.component';
import TextContentCtrl from './textContent.controller';

import {factory} from '../../common/helper';

let textContentModule = angular.module('textContent', [
	'ui.router'
]);

textContentModule.config(($stateProvider, $urlRouterProvider) => {
	
	$stateProvider
		.state('root.textContent', { 
			url: '/textContent',
			views: {
				'menuContent': {
					// template: '<search></search>'		
					// templateUrl: resolveTemplate('components/search');
					templateUrl: factory.resolveToTemplate('component/textContent'),
					controller: 'TextContentCtrl',
					controllerAs: 'textContent'
				}
			}
			
		});
});

textContentModule.directive('textContent', textContentComponent);
textContentModule.controller('TextContentCtrl', TextContentCtrl);

export default textContentModule;