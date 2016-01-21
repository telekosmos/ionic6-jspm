'use strict'; 
import template from './textContainer.html!text';
import controller from './textContainer.controller';
import './textContainer.css!';

let textContainerComponent = function() {
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'TextContainerCtrl',
		scope: {},
		bindToController: true
	};
};

export default textContainerComponent;
