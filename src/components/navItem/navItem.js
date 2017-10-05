(function () {
    angular.module('angularFluent.components.navItem', ['angularFluent.core'])
        .directive('flNavItem', FlNavItem)

        function FlNavItem() {
            return {
                restrict: 'E',
                transclude: true,
                replace: true,
                controller: FlNavItemController,
                requires: ['^flNav'],
                controllerAs: 'ctrl',
                template: '<a class="fl-nav-item" ng-transclude></a>'
            }
        }

        function FlNavItemController() {
            var ctrl = this;
        }
}());