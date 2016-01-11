"use strict";

import controller from './textContainer.controller';

let detectGestures = function($ionicGesture) {
	let directive = {
		restrict: 'A',
		// controller: controller,
		// controllerAs: 'ctrl',
		link: function(scope, elem, attrs) {
			var gestureTypes = attrs.gestureType.split(','); // from gesture-type="hold,tap" attribute
			
			// responseToGesture has to be in the scope or the controller!!!!
			gestureTypes.forEach((gestureType) => {
				$ionicGesture.on(gestureType, scope.responseToGesture.bind(scope), elem);	
				/*
				$ionicGesture.on(gestureType, function(ev) {
					console.log('on ionicGesture: '+ev.type);
				}, elem);
				*/
			});
		}
	};
	return directive;
};

export default detectGestures;