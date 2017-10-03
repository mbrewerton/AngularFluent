(function () {
    angular.module('angularFluent.components.content', ['angularFluent.core'])
        .directive('flContent', FlContent);

        function FlContent () {
            return {
                restrict: 'E',
                transclude: true,
                replace: true,
                controller: FlContentController,
                controllerAs: 'ctrl',
                template: '<div class="fl-content" ng-transclude></div>'
            }
        }

        function FlContentController($scope, $element, $attrs) {
            var ctrl = this;
        }
}());