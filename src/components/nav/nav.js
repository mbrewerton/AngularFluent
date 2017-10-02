// (function () {
//     angular.module('angularFluent.components.nav', ['angularFluent.core'])
//         .controller('flNavController', FlNavController)
//         .directive('flNav', FlNav);

//     function FlNav() {
//         return {
//             restrict: 'E',
//             controller: FlNavController,
//             controllerAs: 'ctrl',
//             template: '<div class="fl-nav"></div>'
//         }
//     }

//     function FlNavController($scope, $element, $attrs) {
//         var self = this;
//     }
// }());

(function () {
    angular.module('angularFluent.components.nav', ['angularFluent.core'])
        .directive('flNav', function() {
            var controller = [
                '$scope', '$element', '$attrs',
                function($scope, $element, $attrs) {
                    var self = this;
                }
            ];

            return {
                restrict: 'E',
                controller: controller,
                transclude: true,
                controllerAs: 'ctrl',
                template: '<div class="fl-nav" ng-transclude></div>'
            };
        })
})();