angular.module('angularFluent.components.menuItem', ['angularFluent.core', 'angularfluent.components'])
.directive('flMenuItem', function() {
    var controller = [
        '$scope', '$element', '$attrs',
        function($scope, $element, $attrs) {
            var self = this;
            $element[0].classList.add('fl-menu-item');
        }
    ];

    return {
        restrict: 'E',
        controller: controller
    }
});