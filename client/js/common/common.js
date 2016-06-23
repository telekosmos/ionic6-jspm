"use strict";

import angular from 'angular';
import Home from './home/home';
import HomeMenu from './homemenu/homemenu';
import TextContainer from './textContainer/textContainer';
import CommonFactory from './helper.factory';
// TODO: move textContainer to components
// 
import Gestures from './gestures/gestures';
import AutoComplete from './autocomplete/autocomplete';

import './common.css!';

/*
import Hero from './hero/hero';
import Navbar from './navbar/navbar';
import Bottomline from './bottomline/bottomline';
import User from './user/user';
*/
console.log('HomeMenu module name is:'+HomeMenu.name);
let commonModule = angular.module('app.common', [ // module dependencies below
	HomeMenu.name,
	Home.name,
	TextContainer.name,
	Gestures.name,
	AutoComplete.name
]);

commonModule.constant('ROOT_JS', '/js');
commonModule.factory('commonFactory', ['ROOT_JS', CommonFactory]);

export default commonModule;