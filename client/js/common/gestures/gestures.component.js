"use strict";

// import template from './gestures.html!text';
// import controller from './gestures.controller';
import GestureCtrl from './gestures.controller';
// import './gestures.css!';


let gesturesDirective = function($ionicGesture) {
	// let controller = new GestureCtrl($ionicGesture);
	let link = function(scope, elem, attrs, controller) {
		var gestureTypes = attrs.gestureType.split(','); // from gesture-type="hold,tap" attribute
		gestureTypes.forEach((gestureType) => {
			// $ionicGesture.on(gestureType, ctrl.responseToGesture.bind(ctrl), elem);	
			var [first, rest] = [gestureType[0], gestureType.slice(1)];
			var methodName = 'on'+first.toUpperCase()+rest;
			$ionicGesture.on(gestureType, controller[methodName].bind(controller), elem);
		});	
		
		scope.$watch(() => controller.fontSize, (newVal, oldVal) => {
			elem.css('font-size', controller.fontSize+'em');
		});
	};

	let directive = {
		restrict: 'A',
		link: link,
		controller: GestureCtrl
	};

	return directive;
};

export default gesturesDirective;


