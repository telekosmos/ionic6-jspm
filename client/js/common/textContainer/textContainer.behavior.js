"use strict";

import angular from 'angular';

let detectGestures = function($ionicGesture) {
	let directive = {
		restrict: 'A',
		// controller: controller,
		// controllerAs: 'ctrl',
		link: function(scope, elem, attrs, controller) {
			let ctrl = scope.textCtrl;
			var gestureTypes = attrs.gestureType.split(','); // from gesture-type="hold,tap" attribute
			
			// responseToGesture has to be in the scope or the controller!!!!
			gestureTypes.forEach((gestureType) => {
				$ionicGesture.on(gestureType, ctrl.responseToGesture.bind(ctrl), elem);	
			});
			// ctrl.size is the variable incrementing size
			scope.$watch(() => ctrl.size, function(newVal, oldVal) {
				console.log(`from ${oldVal} to ${newVal}`);
				let res = newVal/ctrl.stepSize;
				let int = Math.floor(res);
				let dec = res-int;
				dec = Math.trunc(dec*10)/10;
				let newRes = int+dec;
				console.log(`int: ${int}; dec: ${dec}`);
				
				elem.css('font-size', newRes+'em');
			});
		}
	};
	return directive;
};

export default detectGestures;