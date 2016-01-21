class HomeController {
	constructor($scope) {
		this.$scope = $scope;
		this.$scope.name = 'home';
		this.name = 'HomeController';
		// this.$scope.msg = 'Trying to inject the template as a variable...';
		this.msg = 'this.msg is a property of the controller class ';
	}
}

HomeController.$inject = ['$scope'];
export default HomeController;