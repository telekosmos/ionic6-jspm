'use strict';

class AutocompleteController {
	constructor($scope) {
		this.$scope = $scope;
		this.name = 'autocomplete';
		this.$scope.name = 'Autocomplete';
	}
}

AutocompleteController.$inject = ['$scope'];
export default AutocompleteController;