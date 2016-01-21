import angular from 'angular';
import 'angular-ui-router';
import 'angular-sanitize';

import 'ionic';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

// import 'normalize.css';

const APP_CONTAINER_ID = 'app-container';
let appModule = angular.module('app', [
	'ui.router', 'ionic', 'ngSanitize',
	Common.name,
	Components.name
]);

appModule.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    console.log('ionicPlatform ready!!!');
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

appModule.directive('ionApp', AppComponent);

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */
var container = document.getElementById(APP_CONTAINER_ID);
var noAngularDOM;

angular.element(document).ready(() => {
	if(location.origin.match(/localhost/)) {
		System.trace = true;
		noAngularDOM = container.cloneNode(true);

		if ((!System.hotReloader)) {
			System.import('capaj/systemjs-hot-reloader').then(HotReloader => {
				System.hotReloader = new HotReloader.default('http://localhost:8082/');
				System.hotReloader.on('change', (name) => {
					console.log(name, 'changed')
				});
			})
		}
	}
	angular.bootstrap(container, [appModule.name]), {
		strictDi: true
	}
});

export default appModule;
export function __unload() {
	container = document.getElementById(APP_CONTAINER_ID);
	container.remove();
	document.body.appendChild(noAngularDOM.cloneNode(true));
}
