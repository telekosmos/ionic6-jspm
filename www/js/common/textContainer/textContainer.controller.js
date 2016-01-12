"use strict";

class TextContainerController {
	constructor($scope) {
		console.log('Init TextContainerController');
		this.$scope = $scope;
		this.name = 'textContainer';
		
		this.$scope.name = 'TextContainer';
		this.size = 12;
		this.stepSize = 20;
		this.fontsizeCls = ''; 
		// this.$scope.responseToGesture = this.responseToGesture;
		// this.$scope.test = this.test;
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

TextContainerController.$inject = ['$scope'];
export default TextContainerController;