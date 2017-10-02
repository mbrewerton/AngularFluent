(function () {
    angular.module('angularFluent.components.navItem', ['angularFluent.core'])
        .directive('flNavItem', function () {
            var controller = [
                '$scope', '$element', '$attrs',
                function ($scope, $element, $attrs) {
                    var self = this;
                    $element[0].classList.add('fl-nav-item');
                }
            ];

            return {
                restrict: 'E',
                controller: controller,
                controllerAs: 'ctrl'
            }
        });
}());