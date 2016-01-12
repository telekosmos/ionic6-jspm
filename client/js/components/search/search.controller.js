class SearchController {
	constructor($scope) {
		this.$scope = $scope;
		this.name = 'search';
		this.$scope.msg = 'Would input here the search term(s)';
		this.test = 'Is this okkkkk?';
	}
}

SearchController.$inject = ['$scope'];
export default SearchController;