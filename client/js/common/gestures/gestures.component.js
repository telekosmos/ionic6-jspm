"use strict";

// import template from './gestures.html!text';
import GestureCtrl from './gestures.controller';
// import './gestures.css!';

// TODO: try to remove the controller and use the scope of the view to handle the values
let gesturesDirective = function(globals, $ionicGesture) {
	
	let link = function(scope, elem, attrs, controller) {
		var gestureTypes = attrs.gestureType.split(','); // from gesture-type="hold,tap" attribute
		var globalFont = attrs.global !== undefined;
		controller.global = globalFont;

		gestureTypes.forEach((gestureType) => {
			// $ionicGesture.on(gestureType, ctrl.responseToGesture.bind(ctrl), elem);	
			var [first, rest] = [gestureType[0], gestureType.slice(1)];
			var methodName = 'on'+first.toUpperCase()+rest;
			$ionicGesture.on(gestureType, controller[methodName].bind(controller), elem);
		});	
		
		scope.$watch(() => controller.font.fontSize, (newVal, oldVal) => {
			elem.css('font-size', controller.font.fontSize+'em');
		});		
	}; // EO link function

	let directive = {
		restrict: 'A',
		link: link,
		controller: GestureCtrl
	};
	return directive;
};

export default gesturesDirective;


