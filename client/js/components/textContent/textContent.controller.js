'use strict';

class TextContentController {
	constructor($scope) {
		this.$scope = $scope;
		this.name = 'textContent';
		this.$scope.name = 'TextContent';

		this.title = 'TitleTitle';
		this.content = [
			'Shanty town concrete modem media tattoo euro-pop grenade geodesic computer drone footage franchise cartel. Marketing bicycle otaku range-rover Chiba tiger-team post-military-grade A.I. tower boy refrigerator nano-footage. Papier-mache rain neural human gang car into engine katana warehouse shoes lights. ',
			'Car jeans spook ablative boat artisanal table dissident. Bicycle pen uplink neural tanto faded spook man drugs boy sub-orbital stimulate courier. Marketing bomb youtube modem sign sentient knife assault spook rebar Shibuya gang. Silent sunglasses chrome Legba woman assassin shrine. Pre-geodesic industrial grade concrete convenience store camera corrupted fluidity crypto-ablative meta. Woman disposable man table grenade voodoo god monofilament refrigerator. '
		];
	}
}

TextContentController.$inject = ['$scope'];
export default TextContentController;