'use strict';

import 'ionic';

const MIN_COUNT = 12;
const MIN_SIZE = 1;
class GestureCtrl {
	constructor($scope) {
		this.fontCount = MIN_COUNT;
		this.fontSize = MIN_SIZE;
		this.stepSize = 30;
	}

	onDragright() {
		this.fontCount++;
		console.log('Drag right: '+ this.fontCount);
		this.updateSize(this.fontCount);
	}

	onDragleft() {
		this.fontCount = this.fontCount <= MIN_COUNT? this.fontCount: this.fontCount-1;
		console.log('Drag left: '+this.fontCount);
		this.updateSize(this.fontCount);
	}

	updateSize(newVal) { //, oldVal) {
		// console.log(`from ${oldVal} to ${newVal}`);
		let res = newVal/this.stepSize;
		let int = Math.floor(res);
		let dec = res-int;
		dec = Math.trunc(dec*10)/10;
		let newRes = int+dec;
		console.log(`[GestureCtrl]: int: ${int}; dec: ${dec} => fontSize ${newRes}`);
		this.fontSize = newRes < MIN_SIZE/2? this.fontSize: newRes;
		return newRes;
	}
}
GestureCtrl.$inject = ['$scope'];

export default GestureCtrl;