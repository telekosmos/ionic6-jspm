'use strict'; 
import template from './textContent.html!text';
import controller from './textContent.controller';
import './textContent.css!';

let textContentComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'TextContentCtrl',
		scope: {},
		bindToController: true
	};
};

export default textContentComponent;
