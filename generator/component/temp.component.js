'use strict'; 
import template from './<%= name %>.html!text';
import controller from './<%= name %>.controller';
import './<%= name %>.css!';

let <%= name %>Component = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: '<%= upCaseName %>Ctrl',
		scope: {},
		bindToController: true
	};
};

export default <%= name %>Component;
