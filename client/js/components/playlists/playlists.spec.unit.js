// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import PlaylistsModule from './playlists'
import PlaylistsController from './playlists.controller';
import PlaylistsComponent from './playlists.component';
import PlaylistsTemplate from './playlists.html!text';

describe('Playlists', ()=>{
	let $rootScope, $scope,	makeController;
	
	beforeEach(angular.mock.module(PlaylistsModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		makeController = () => new PlaylistsController($scope);
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
		
		it('should have name in template [REMOVE]', ()=>{
			expect(PlaylistsTemplate).to.match(/{{\s?playlists\..*\s?}}/g);
		});
	});
	
	
	describe('Component', ()=>{
			// test the component/directive itself
			let component = PlaylistsComponent();
			
			it('should use the right template',()=>{
				expect(component.template).to.equal(PlaylistsTemplate);
			});
			
			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});
			
			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(PlaylistsController);
			});
	});
});

 




