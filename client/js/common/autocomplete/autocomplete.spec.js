'use strict';

// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import AutocompleteModule from './autocomplete';
import AutocompleteController from './autocomplete.controller';
import AutocompleteComponent from './autocomplete.component';
import AutocompleteTemplate from './autocomplete.html!text';

describe('Autocomplete', ()=>{
	let $rootScope;
	var makeController, controller;
	
	beforeEach(angular.mock.module(AutocompleteModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		/*
		makeController = function() {
			let ctrl = new AutocompleteController();
			console.log('makeController -> new ctrl: '+ctrl);
			return ctrl;
		};
		*/
		makeController = () => new AutocompleteController($rootScope);
	}));
	
	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		it ('should exist and have right name', () => {
			expect(null).to.not.be.undefined;
			expect(AutocompleteModule).not.to.be.undefined;
			expect(AutocompleteModule.name).to.equal('autocomplete');
			// test for routing
		});
	});
	
	describe('Controller', ()=>{
		// test your controller here
		
		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			controller = makeController();
			expect(controller).not.to.be.undefined;
			expect(controller).to.have.property('name'); 
		});
	});
	
	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}
		
		it('should have name in template [REMOVE]', ()=>{
			expect(AutocompleteTemplate).to.match(/{{\s?result\.image\s?}}/g);
			expect(AutocompleteTemplate).to.match(/{{\s?result\.description\s?}}/g);
		});
	});
	
	
	describe('Component', ()=>{
			// test the component/directive itself
			let component = AutocompleteComponent();
			it('should exists the component', () => {
				expect(component).not.to.be.undefined;
			});

			it('should use controllerAs', ()=>{
				expect(component).to.have.property('scope');
				expect(component).to.have.property('restrict');
			});
			
			/*
			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(AutocompleteController);
			});
			*/
	});
});

 




