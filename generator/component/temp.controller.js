'use strict';

class <%= upCaseName %>Controller {
	constructor($scope) {
		this.$scope = $scope;
		this.name = '<%= name %>';
		this.$scope.name = '<%= upCaseName %>';
	}
}

<%= upCaseName %>Controller.$inject = ['$scope'];
export default <%= upCaseName %>Controller;