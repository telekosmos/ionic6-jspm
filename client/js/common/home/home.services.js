"use strict";

export class HomeServices {
	constructor() {
		this.fontSize = 1;
	}
};


class ClassGlobals {
	constructor() {
		this.font = {
			fontSize: this.MIN_FONTSIZE,
			stepSize: 35,
			fontCount: this.MIN_FONTCOUNT // counting of slide values
		};
	}

	get MIN_FONTSIZE() {
		return 1.1;
	}

	get MIN_FONTCOUNT() {
		return 12;
	}
	
}

export let GlobalSettings = () => new ClassGlobals();