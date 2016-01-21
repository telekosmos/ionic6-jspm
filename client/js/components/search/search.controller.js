class SearchController {
	constructor($scope) {
		this.$scope = $scope;
		this.name = 'search';
		this.$scope.msg = 'Would input here the search term(s)';
		this.test = 'Is this okkkkk?';
		this.searchTerm = '';
	}
}

SearchController.$inject = ['$scope'];
export default SearchController;