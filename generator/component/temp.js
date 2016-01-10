'use strict';

import angular from 'angular';
import 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';
import <%= upCaseName %>Ctrl from './<%= name %>.controller';

import {factory} from '../../common/helper';

let <%= name %>Module = angular.module('<%= name %>', [
	'ui.router'
]);

<%= name %>Module.config(($stateProvider, $urlRouterProvider) => {
	
	$stateProvider
		.state('root.<%= name %>', { 
			url: '/<%= name %>',
			views: {
				'menuContent': {
					// template: '<search></search>'		
					// templateUrl: resolveTemplate('components/search');
					templateUrl: factory.resolveToTemplate('<%= type %>/<%= name %>'),
					controller: '<%= upCaseName %>Ctrl',
					controllerAs: '<%= name %>'
				}
			}
			
		});
});

<%= name %>Module.directive('<%= name %>', <%= name %>Component);
<%= name %>Module.controller('<%= upCaseName %>Ctrl', <%= upCaseName %>Ctrl);

export default <%= name %>Module;