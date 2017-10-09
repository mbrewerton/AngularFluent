(function () {
    angular.module('angularFluent.layout', ['angularFluent.core'])
        .directive('flFlex', FlFlex)
        .directive('flFlexGrow', FlFlexGrow)

    function FlFlex() {
        return {
            controller: ['$scope', '$element', '$attrs', FlFlexController],
            controllerAs: 'ctrl',
            restrict: 'A'
        }
    }

    function FlFlexGrow() {
        return {
            controller: ['$scope', '$element', '$attrs', FlFlexGrowController],
            controllerAs: 'ctrl',
            restrict: 'A'
        }
    }

    function FlFlexController($scope, $element, $attrs) {
        $element.addClass('fl-flex');
    }

    function FlFlexGrowController($scope, $element, $attrs) {
        $element.addClass('fl-flex-grow');
    }

    function getTemplate($attrs) {
        console.log('Attrs in fl-flex', $attrs);
        return '';
    }
})();