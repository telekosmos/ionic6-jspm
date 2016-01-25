"use strict";

class SearchController {
	constructor($scope) {
		this._$scope = $scope;
		this.name = 'SearchController';
		this._$scope.msg = 'Would input here the search term';
		this.test = 'Is this okkkkk?';
		this.searchTerm = '';
		this.viewTitle = 'Search';
	}

	get teams() {
		if (this._teams === undefined) {
			this._teams = [{
				name: 'Atlanta Hawks',
				conf: 'Eastern'
			}, {
				name: 'Boston Celtics',
				conf: 'Eastern'
			}, {
				name: 'Brooklyn Nets',
				conf: 'Eastern'
			}, {
				name: 'Charlotte Hornets',
				conf: 'Eastern'
			}, {
				name: 'Chicago Bulls',
				conf: 'Eastern'
			}, {
				name: 'Cleveland Cavaliers',
				conf: 'Eastern'
			}, {
				name: 'Dallas Mavericks',
				conf: 'Western'
			}, {
				name: 'Denver Nuggets',
				conf: 'Western'
			}, {
				name: 'Detroit Pistons',
				conf: 'Eastern'
			}, {
				name: 'Golden State Warriors',
				conf: 'Western'
			}, {
				name: 'Houston Rockets',
				conf: 'Western'
			}, {
				name: 'Indiana Pacers',
				conf: 'Eastern'
			}, {
				name: 'LA Clippers',
				conf: 'Western'
			}, {
				name: 'LA Lakers',
				conf: 'Western'
			}, {
				name: 'Memphis Grizzlies',
				conf: 'Western'
			}, {
				name: 'Miami Heat',
				conf: 'Eastern'
			}, {
				name: 'Milwaukee Bucks',
				conf: 'Eastern'
			}, {
				name: 'Minnesota Timberwolves',
				conf: 'Western'
			}, {
				name: 'New Orleans Pelicans',
				conf: 'Western'
			}, {
				name: 'New York Knicks',
				conf: 'Eastern'
			}, {
				name: 'Oklahoma City Thunder',
				conf: 'Western'
			}, {
				name: 'Orlando Magic',
				conf: 'Eastern'
			}, {
				name: 'Philadelphia Sixers',
				conf: 'Eastern'
			}, {
				name: 'Phoenix Suns',
				conf: 'Western'
			}, {
				name: 'Portland Trail Blazers',
				conf: 'Western'
			}, {
				name: 'Sacramento Kings',
				conf: 'Western'
			}, {
				name: 'San Antonio Spurs',
				conf: 'Western'
			}, {
				name: 'Toronto Raptors',
				conf: 'Eastern'
			}, {
				name: 'Utah Jazz',
				conf: 'Western'
			}, {
				name: 'Washington Wizards',
				conf: 'Eastern'
			}];
		} // EO if
		return this._teams;
	}
}

SearchController.$inject = ['$scope'];
export default SearchController;