class HomeController {
	constructor($scope) {
		this.$scope = $scope;
		this.$scope.name = 'home';
		this.$scope.msg = 'Trying to inject the template as a variable...';
	}
}

HomeController.$inject = ['$scope'];
export default HomeController;