'use strict';

import angular from 'angular';
import 'angular-mocks';
import HelperModule from './common';
// import HelperFactory from './common.factory';

describe('Helper', () => {
	let $rootScope, rootJsConstant, factory;
	// makeController;
	
	beforeEach(function() {
		angular.mock.module(HelperModule.name);
		angular.mock.inject(function(_ROOT_JS_, _commonFactory_) {
			rootJsConstant = _ROOT_JS_;
			factory = _commonFactory_;
		})
	})
	
	describe('Module', () => {
		// test things about the module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
		it('should services and values exist', () => {
			should.exist(factory);
			should.exist(rootJsConstant);	
		});

		it('should constant be a string', () => {
			angular.isString(rootJsConstant).should.be.true;
		});

		it('should factory be a function', () => {
			angular.isObject(factory).should.be.true;
			angular.isFunction(factory.resolveToTemplate).should.be.true;
		})
		
	});
	
	describe('Services', () => {
		it('should exist factory', () => {
			should.exist(factory);
		});

		it('should return the right path for a component template', () => {
			let mockComponentPath = 'component/foo';
			let [,mockComponentName] = mockComponentPath.split('/');
			let pathToTmpl = factory.resolveToTemplate(mockComponentPath);

			pathToTmpl.startsWith(rootJsConstant).should.be.true;
			pathToTmpl.should.contains(mockComponentPath);
			pathToTmpl.endsWith(mockComponentName+'.html').should.be.true;
		});

	});

	describe('Controller', ()=>{
		// test your controller here
		
		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			// let controller = makeController();
			
			// expect(controller).to.have.property('name'); 
		});
	});
});