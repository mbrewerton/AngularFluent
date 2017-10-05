(function () {
    angular.module('angularFluent.components.button', ['angularFluent.core'])
        .directive('flButton', FlButton);

    function FlButton() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            controllerAs: 'ctrl',
            template: getTemplate
        }

        function getTemplate(element, attrs) {
            if (isAnchor(attrs)) {
                return '<a class="fl-button" ng-transclude></a>';
            } else {
                return '<button class="fl-button" type="button" ng-transclude></button>'
            }
        }

        function isAnchor(attrs) {
            return angular.isDefined(attrs.href) || angular.isDefined(attrs.ngHref);
        }
    }
}());