'use strict';

// import angular from 'angular';
// import 'angular-ui-router';

import gesturesComponent from './gestures.component';
import GesturesCtrl from './gestures.controller';

import {factory} from '../../common/helper';

let gesturesModule = angular.module('gestures', [
	'ui.router'
]);

gesturesModule.directive('gestures', ['globals', '$ionicGesture', gesturesComponent]);

export default gesturesModule;