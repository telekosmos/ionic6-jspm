class HomeController {
	constructor($scope) {
		this.$scope = $scope;
		this.$scope.name = 'home';
		this.$scope.msg = 'HomeController crap...';
	}
}

HomeController.$inject = ['$scope'];
export default HomeController;