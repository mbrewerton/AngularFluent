(function () {
    angular.module('angularFluent.components.flexDirection', ['angularFluent.core'])
        .directive('flFlexDirection', FlFlexDirection);

    function FlFlexDirection() {
        return flexDirection = {
            controller: FlFlexDirectionController,
            controllerAs: 'ctrl',
            restrict: 'A',
            scope: {
                flexDirection: '@flFlexDirection'
            }
        };
    }
    function FlFlexDirectionController($scope, $element, $attrs) {
        var ctrl = this;
        ctrl.flexDirectionClass = 'fl-flex-direction-' + $scope.flexDirection;
        $element[0].classList.add(ctrl.flexDirectionClass);
        console.log(ctrl);
        console.log($scope);
    }
})();