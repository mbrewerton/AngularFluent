(function () {
    angular.module('angularFluent.components.nav', ['angularFluent.core'])
        .directive('flNav', FlNav)

        function FlNav() {
            return {
                restrict: 'E',
                transclude: true,
                replace: true,
                controller: FlNavController,
                controllerAs: 'ctrl',
                template: '<nav role="navigation"><ul class="fl-nav" ng-transclude></ul></nav>'
            };
        }

        function FlNavController() {

        }
})();