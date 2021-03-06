"use strict";

class TextContainerController {
	constructor($scope, $rootScope) {
		this.$scope = $scope;
		this.name = 'TextContainerController';
		
		this.$scope.name = 'TextContainer';
		this.size = 12;
		this.stepSize = 20;
		this.rootFontSize = $rootScope.fontSize; 

	}

	responseToGesture(event) {
		// angular.element(event.currentTarget) // -> jquery elem
		console.log('responseToGesture: '+event.type);
		switch(event.type) {
			case 'dragright': this.size++; break;
			case 'dragleft': this.size = this.size > 12? this.size-1: 12; break;
			default: console.log('event type: '+event.type);
		}
		console.log('size: '+this.size);
		this.$scope.$apply();
	}

	test(event) {
		// this.size++;
		console.log(`${this.name} v0.1 (${this.size} - ${event.type})`);
		return `${this.name} v0.1 (${this.size})`;
	}
}

TextContainerController.$inject = ['$scope', '$rootScope'];
export default TextContainerController;