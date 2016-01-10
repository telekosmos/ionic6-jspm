// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import 'angular-ui-router';

import PlaylistModule from './playlist'
import PlaylistController from './playlist.controller';
import PlaylistComponent from './playlist.component';
import PlaylistTemplate from './playlist.html!text';

describe('Playlist', ()=>{
	let $rootScope, $stateParams,
	makeController;
	
	beforeEach(angular.mock.module(PlaylistModule.name));
	beforeEach(angular.mock.inject((_$rootScope_, _$stateParams_)=>{
		$rootScope = _$rootScope_;
		$stateParams = _$stateParams_;
		makeController = () => {
			return new PlaylistController($rootScope, $stateParams);
		};
	}));
	
	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});
	
	describe('Controller', ()=>{
		// test your controller here
		
		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			let controller = makeController();
			expect(controller).to.have.property('name'); 
		});
	});
	
	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}
		
		it('should have song in template', ()=>{
			expect(PlaylistTemplate).to.match(/{{\s?song\s?}}/g);
		});
	});
	
	
	describe('Component', ()=>{
			// test the component/directive itself
			let component = PlaylistComponent();
			
			it('should use the right template',()=>{
				expect(component.template).to.equal(PlaylistTemplate);
			});
			
			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});
			
			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(PlaylistController);
			});
	});
});

 




