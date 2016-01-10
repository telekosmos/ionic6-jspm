'use strict'; 

class PlaylistController {
	constructor($scope, $stateParams) {
		this.$scope = $scope;
		this.name = 'playlist';
		this.$scope.name = 'Playlist';
		this.lists = [
			{id: 1, songs: ['One1', 'Two1', 'Three1'], title: 'List1'},
			{id: 2, songs: ['One2', 'Two2', 'Three2'], title: 'List2'},
			{id: 3, songs: ['One3', 'Two3', 'Three3'], title: 'List3'},
			{id: 4, songs: ['One4', 'Two4', 'Three4'], title: 'List4'},
			{id: 5, songs: ['One5', 'Two5', 'Three5'], title: 'List5'},
			{id: 6, songs: ['One6', 'Two6', 'Three6'], title: 'List6'}
		];

		let chosen = this.lists.filter((item) => item.id == $stateParams.playlistId);
		this.$scope.list = chosen.length > 0? chosen[0]: {id: -1};
	}

	getPlaylist(id) {
		console.log(`getPlaylist(${id})`);
		let choice = this.$scope.lists.filter((item) => {
			return item.id == id;
		});
		this.$scope.list = choice[0];
		// return choice.length > 0? choice[0]: '';
	}
}

PlaylistController.$inject = ['$scope', '$stateParams'];
export default PlaylistController;