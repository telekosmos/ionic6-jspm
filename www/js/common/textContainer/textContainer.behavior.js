"use strict";

import controller from './textContainer.controller';

let detectGestures = function($ionicGesture) {
	let directive = {
		restrict: 'A',
		// controller: controller,
		// controllerAs: 'ctrl',
		link: function(scope, elem, attrs) {
			let controller = scope.textCtrl;
			var gestureTypes = attrs.gestureType.split(','); // from gesture-type="hold,tap" attribute
			
			// responseToGesture has to be in the scope or the controller!!!!
			gestureTypes.forEach((gestureType) => {
				$ionicGesture.on(gestureType, controller.responseToGesture.bind(controller), elem);	
			});
		}
	};
	return directive;
};

export default detectGestures;