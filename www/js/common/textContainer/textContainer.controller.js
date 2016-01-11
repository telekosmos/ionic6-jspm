"use strict";

class TextContainerController {
	constructor($scope) {
		console.log('Init TextContainerController');
		this.$scope = $scope;
		this.name = 'textContainer';
		
		this.$scope.name = 'TextContainer';
		this.size = -2;
		// this.$scope.responseToGesture = this.responseToGesture;
		// this.$scope.test = this.test;
	}

	responseToGesture(event) {
		console.log('responseToGesture: '+event.type);
		switch(event.type) {
			case 'dragright': this.size++; break;
			case 'dragleft': this.size--; break;
			default: console.log('event type: '+event.type);
		}
		console.log('size: '+this.size);
	}

	test(event) {
		// this.size++;
		console.log(`${this.name} v0.1 (${this.size} - ${event.type})`);
		return `${this.name} v0.1 (${this.size})`;
	}
}

TextContainerController.$inject = ['$scope'];
export default TextContainerController;