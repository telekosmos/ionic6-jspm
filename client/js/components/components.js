import angular from 'angular';
/*
import Home from './home/home';
import About from './about/about'; 
import Aux from './aux/aux';
*/
import Search from './search/search';
import Playlists from './playlists/playlists';
import Playlist from './playlist/playlist';

let componentModule = angular.module('app.components', [
	Search.name,
	Playlists.name,
	Playlist.name
]);

export default componentModule;