'use strict';

class HomemenuController {
	constructor($scope, $ionicHistory) {
		this.$scope = $scope;
		this.$ionicHistory = $ionicHistory;
		this.$scope.name = 'homemenu';
    this.name = 'homemenu';
	}

	goBack() {
		// console.log(`myGoBack history: ${JSON.stringify(this.$ionicHistory.viewHistory())}`);
		this.$ionicHistory.goBack();
	}
}

HomemenuController.$inject = ['$scope', '$ionicHistory'];
export default HomemenuController;