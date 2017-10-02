(function () {
    angular.module('angularFluent.components.menu', ['angularFluent.core'])
        .directive('flMenu', function () {
            var controller = [
                '$scope', '$element', '$attrs',
                function ($scope, $element, $attrs) {
                    var self = this;
                    $element[0].classList.add('fl-menu');
                }
            ];

            return {
                restrict: 'E',
                controller: controller
            }
        });
}());