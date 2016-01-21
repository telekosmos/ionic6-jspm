"use strict";

import template from './home.html!text';
import controller from './home.controller';
import './home.css!';

let homeComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'homeCtrl',
		scope: {},
		bindToController: true
	};
};

export default homeComponent;
