'use strict';

// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import 'ionic';

import GesturesModule from './gestures';
import GesturesController from './gestures.controller';
import GesturesComponent from './gestures.component';
import GesturesTemplate from './gestures.html!text';

describe('Gestures', ()=>{
	let $rootScope, makeController, globals, $ionicGesture;
	
	beforeEach(angular.mock.module('home'));
	beforeEach(() => angular.mock.module('ionic'));
	// angular.mock.module('ionic');
	beforeEach(module(GesturesModule.name));
	beforeEach(angular.mock.inject((_$rootScope_, _globals_, _$ionicGesture_) => {
		$rootScope = _$rootScope_;
		globals = _globals_;
		$ionicGesture = _$ionicGesture_;
		makeController = () => new GesturesController($rootScope, globals);
	}));
	
	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
		it ('should module properties be fine', () => {
			expect(globals).not.to.be.undefined;	
		});
		
	});
	
	describe('Controller', ()=>{
		// test your controller here
		
		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			let controller = makeController();
			
			expect(controller).to.have.property('name'); 
			let fontObj = controller.globalFont;
			expect(fontObj).not.to.be.undefined;
			expect(fontObj).to.be.an('object');
		});
	});
	
	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}
		
		it('should have name in template [REMOVE]', ()=>{
			// expect(GesturesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
			expect(GesturesTemplate).to.match(/\s*<ion\-content\s.*>/);
		});
	});
	
	
	describe('Component', ()=>{
			// test the component/directive itself
			let component = GesturesComponent(globals, $ionicGesture);

			it('should exist', () => {
				expect(component).not.to.be.undefined;
			})
			
			it('should use as an attribute', ()=>{
				expect(component).to.have.property('restrict');
				expect(component.restrict).to.be.equals('A');
			});
			
			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(GesturesController);
			});
	});
});

 




