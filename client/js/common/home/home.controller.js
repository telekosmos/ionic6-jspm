class HomeController {
	constructor($scope) {
		this.$scope = $scope;
		this.$scope.name = 'home';
		this.name = 'HomeController';
		this.viewTitle = 'Home';
		// this.$scope.msg = 'Trying to inject the template as a variable...';
		let msg = 'This view is just the view which is displayed when root route is reached';
		msg += '.<br/> And this message is got from a its controller';
		this.msg = msg;
	}
}

HomeController.$inject = ['$scope'];
export default HomeController;