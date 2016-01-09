import template from './search.html!text';
import controller from './search.controller';
import './search.css!';

let searchComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'searchCtrl',
		scope: {},
		bindToController: true
	};
};

export default searchComponent;
