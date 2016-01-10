import template from './playlist.html!text';
import controller from './playlist.controller';
import './playlist.css!';

let playlistComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'PlaylistCtrl',
		scope: {},
		bindToController: true
	};
};

export default playlistComponent;
