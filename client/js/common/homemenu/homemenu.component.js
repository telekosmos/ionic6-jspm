import template from './homemenu.html!text';
import controller from './homemenu.controller';
import './homemenu.css!';

// console.log('homemenuComponent: '+template);
let homemenuComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'rootCtrl',
		scope: {},
		bindToController: true
	};
};

export default homemenuComponent;
