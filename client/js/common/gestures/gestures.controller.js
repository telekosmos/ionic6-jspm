'use strict';

class GestureCtrl {
	constructor($scope, globals) {
		console.log('Init GestureCtrl');
		this.font = this.localFont;

		this.name = "GestureCtrl";
		this._global = false;
		this._globals = globals;
		this._$scope = $scope;
	}

	get localFont() {
		return {
			fontCount: this.MIN_COUNT,
			fontSize: this.MIN_SIZE,
			stepSize: 30 // step to increase the font size
		};
	}

	get globalFont() {
		return this._globals.font;
	}

	get MIN_SIZE() {
		return 1;
	}

	get MIN_COUNT() {
		return 12;
	}

	set global(val) {
		this._global = val;
		this.font = val? this._globals.font: this.localFont;	
	}

	get global() {
		return this._global;
	}

	onDragright() {
		this.font.fontCount++;
		this.updateSize();
	}

	onDragleft() {
		this.font.fontCount = this.font.fontCount <= this.MIN_COUNT
			? this.font.fontCount
			: this.font.fontCount-1;
		
		this.updateSize();
	}

	updateSize() { 
		let newRes = this._count2Size(this.font.fontCount);

		let newFontSize = newRes < this.MIN_SIZE/2? this.font.fontSize: newRes;
		this.font.fontSize = newFontSize;
		this._$scope.$digest();
		return newRes;
	}

	_count2Size(count) {
		let quotient = count/this.font.stepSize;
		let intQuotient = Math.floor(quotient);
		let dec = quotient-intQuotient;
		dec = Math.trunc(dec*10)/10;
		let newRes = intQuotient+dec;

		return newRes;
	}
}
GestureCtrl.$inject = ['$scope', 'globals'];

export default GestureCtrl;