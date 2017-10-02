(function () {
    angular.module('angularFluent.components.button', ['angularFluent.core'])
        .directive('flButton', function () {
            var controller = [
                '$scope', '$element', '$attrs',
                function ($scope, $element, $attrs) {
                    var self = this;
                    $element[0].classList.add('fl-button');

                    console.log('Initialised flButton');
                }
            ];

            return {
                restrict: 'E',
                controller: controller,
            }
        });
}());