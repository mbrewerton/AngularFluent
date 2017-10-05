(function () {
    angular.module('angularFluent.components.flexDirection', ['angularFluent.core'])
        .directive('flFlexDirection', FlFlexDirection);

    function FlFlexDirection(dependency1) {
        return flexDirection = {
            controller: FlFlexDirectionController,
            controllerAs: 'ctrl',
            restrict: 'A',
            scope: {
                flexDirection: '@flFlexDirection'
            }
        };
    }
    function FlFlexDirectionController() {
        var ctrl = this;
    }
})();