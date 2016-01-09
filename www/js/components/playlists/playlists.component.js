import template from './playlists.html!text';
import controller from './playlists.controller';
import './playlists.css!';

let playlistsComponent = function() {
	return {
		template,
		controller,
		controllerAs: 'playlistsCtrl',
		bindToController: true,
		restrict: 'E',
		scope: {}		
	};
};

export default playlistsComponent;
