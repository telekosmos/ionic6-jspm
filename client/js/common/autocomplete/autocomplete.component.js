'use strict';

import template from './autocomplete.html!text';
import controller from './autocomplete.controller';
import './autocomplete.css!';


let autocompleteComponent = function($parse, $http, $sce, $timeout) {

	let linkFn = function($scope, elem, attrs) {
		// INIT
		$scope.lastSearchTerm = null;
		$scope.currentIndex = null;
		$scope.justChanged = false;
		$scope.searchTimer = null;
		$scope.hideTimer = null;
		$scope.searching = false;
		$scope.pause = 500;
		$scope.minLength = 3;
		$scope.searchStr = null;

		if (!!$scope.minLengthUser && $scope.minLengthUser !== "") {
			$scope.minLength = $scope.minLengthUser;
		}
		if ($scope.userPause) {
			$scope.pause = $scope.userPause;
		}

		let isNewSearchNeeded = function(newTerm, oldTerm) {
			return newTerm.length >= $scope.minLength && newTerm != oldTerm;
		};

		let processResults = function(responseData, str) {
			if (responseData && responseData.length > 0) {
				$scope.results = [];

				var titleFields = [];
				if ($scope.titleField && $scope.titleField !== "") {
					titleFields = $scope.titleField.split(",");
				}

				for (var i = 0; i < responseData.length; i++) {
					// Get title variables
					var titleCode = [];

					for (var t = 0; t < titleFields.length; t++) {
						titleCode.push(responseData[i][titleFields[t]]);
					}

					var description = "";
					if ($scope.descriptionField) {
						description = responseData[i][$scope.descriptionField];
					}

					var imageUri = "";
					if ($scope.imageUri) {
						imageUri = $scope.imageUri;
					}

					var image = "";
					if ($scope.imageField) {
						image = imageUri + responseData[i][$scope.imageField];
					}

					var text = titleCode.join(' ');
					if ($scope.matchClass) {
						var re = new RegExp(str, 'i');
						var strPart = text.match(re)[0];
						text = $sce.trustAsHtml(text.replace(re, '<span class="' + $scope.matchClass + '">' + strPart + '</span>'));
					}

					var resultRow = {
						title: text,
						description: description,
						image: image,
						originalObject: responseData[i]
					};

					$scope.results[$scope.results.length] = resultRow;
				}
			} else {
				$scope.results = [];
			}
		}; // EO processResults

		let searchTimerComplete = function(str) {
			// Begin the search
			if (str.length >= $scope.minLength) {
				if ($scope.localData) {
					var searchFields = $scope.searchFields.split(",");
					var matches = [];

					for (var i = 0; i < $scope.localData.length; i++) {
						var match = false;

						for (var s = 0; s < searchFields.length; s++) {
							match = match 
								|| (typeof $scope.localData[i][searchFields[s]] === 'string' 
								&& typeof str === 'string' 
								&& $scope.localData[i][searchFields[s]].toLowerCase().indexOf(str.toLowerCase()) >= 0);
						}
						if (match) {
							matches[matches.length] = $scope.localData[i];
						}
					}
					$scope.searching = false;
					$scope.processResults(matches, str);
				} 
				else {
					$http.get($scope.url + str, {}).
					success(function(responseData, status, headers, config) {
						$scope.searching = false;
						$scope.processResults((($scope.dataField) ? responseData[$scope.dataField] : responseData), str);
					}).
					error(function(data, status, headers, config) {
						console.log("[Autocomplete] Err: "+status);
					});
				}
			}
		}; // EO searchTimerComplete

		let hideResults = function() {
			$scope.hideTimer = $timeout(function() {
				$scope.showDropdown = false;
			}, $scope.pause);
		};

		let resetHideResults = function() {
			if ($scope.hideTimer) {
				$timeout.cancel($scope.hideTimer);
			};
		};

		let hoverRow = function(index) {
			$scope.currentIndex = index;
		};


		let keyPressed = function(event) {
			if (!(event.which == 38 || event.which == 40 || event.which == 13)) {
				if (!$scope.searchStr || $scope.searchStr == "") {
					$scope.showDropdown = false;
					$scope.lastSearchTerm = null
				} 
				else if (isNewSearchNeeded($scope.searchStr, $scope.lastSearchTerm)) {
					$scope.lastSearchTerm = $scope.searchStr
					$scope.showDropdown = true;
					$scope.currentIndex = -1;
					$scope.results = [];

					if ($scope.searchTimer) {
						$timeout.cancel($scope.searchTimer);
					}

					$scope.searching = true;
					$scope.searchTimer = $timeout(function() {
						$scope.searchTimerComplete($scope.searchStr);
					}, $scope.pause);
				}
			} 
			else {
				event.preventDefault();
			}
		}; // EO keyPressed

		let selectResult = function(result) {
			if ($scope.matchClass) {
				result.title = result.title.toString().replace(/(<([^>]+)>)/ig, '');
			}
			$scope.searchStr = $scope.lastSearchTerm = result.title;
			$scope.selectedObject = result;
			$scope.showDropdown = false;
			$scope.results = [];
			//$scope.$apply();
		}; // EO selectResult

		$scope.processResults = processResults;
		$scope.searchTimerComplete = searchTimerComplete;
		$scope.hideResults = hideResults;
		$scope.resetHideResults = resetHideResults;
		$scope.hoverRow = hoverRow;
		$scope.keyPressed = keyPressed;
		$scope.selectResult = selectResult;

		var inputField = elem.find('input');
		inputField.on('keyup', $scope.keyPressed);
		elem.on("keyup", function(event) {
			if (event.which === 40) {
				if ($scope.results && ($scope.currentIndex + 1) < $scope.results.length) {
					$scope.currentIndex++;
					// $scope.$apply();
					event.preventDefault();
					event.stopPropagation();
				}
				// $scope.$apply();
			} 
			else if (event.which == 38) {
				if ($scope.currentIndex >= 1) {
					$scope.currentIndex--;
					// $scope.$apply();
					event.preventDefault();
					event.stopPropagation();
				}
			} 
			else if (event.which == 13) {
				if ($scope.results && $scope.currentIndex >= 0 
					&& $scope.currentIndex < $scope.results.length) {
					$scope.selectResult($scope.results[$scope.currentIndex]);
					// $scope.$apply();
					event.preventDefault();
					event.stopPropagation();
				} 
				else {
					$scope.results = [];
					// $scope.$apply();
					event.preventDefault();
					event.stopPropagation();
				}
			} 
			else if (event.which == 27) {
				$scope.results = [];
				$scope.showDropdown = false;
				// $scope.$apply();
			} 
			else if (event.which == 8) {
				$scope.selectedObject = null;
				// $scope.$apply();
			}
			$scope.$apply();
		});
	}; // EO linkFn


	let directive = {
		restrict: 'EA',
		scope: {
			"id": "@id",
			"placeholder": "@placeholder",
			"selectedObject": "=selectedobject", // mandatory
			"url": "@url",
			"dataField": "@datafield",
			"titleField": "@titlefield",
			"descriptionField": "@descriptionfield",
			"imageField": "@imagefield",
			"imageUri": "@imageuri",
			"inputClass": "@inputclass",
			"userPause": "@pause",
			"localData": "=localdata", // mandatory if local!!
			"searchFields": "@searchfields",
			"minLengthUser": "@minlength",
			"matchClass": "@matchclass"
		},
		template: template,
		link: linkFn
	};

	return directive;
};

export default autocompleteComponent;

