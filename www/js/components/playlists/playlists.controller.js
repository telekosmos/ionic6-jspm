class PlaylistsController {
	constructor($scope) {
		this.$scope = $scope;
		this.$scope.name = 'playlists in <b>$scope</b>';
		this.$scope.lists = [
	    { title: 'Reggae', id: 1 },
	    { title: 'Chill', id: 2 },
	    { title: 'Dubstep', id: 3 },
	    { title: 'Indie', id: 4 },
	    { title: 'Rap', id: 5 },
	    { title: 'Cowbell', id: 6 }
	  ];

	  this.version='0.1';
	}
}

PlaylistsController.$inject = ['$scope'];
export default PlaylistsController;