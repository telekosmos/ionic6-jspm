import template from './app.component.html!text'; // -> contains <ui-view>
import './app.component.css!';

let appComponent = () => {
	return {
		template, // because we have a variable name template we can use the (ES6) shorcut here
		restrict: 'E'
	};
};

export default appComponent;
