(function () {
    angular.module('angularFluent.layout', ['angularFluent.core'])
        .directive('flFlex', FlFlex)
        .directive('flFlexFill', FlFlexFill)

    function FlFlex() {
        return {
            controller: ['$scope', '$element', '$attrs', FlFlexController],
            controllerAs: 'ctrl',
            restrict: 'A'
        }
    }

    function FlFlexFill() {
        return {
            controller: ['$scope', '$element', '$attrs', FlFlexFillController],
            controllerAs: 'ctrl',
            restrict: 'A'
        }
    }

    function FlFlexController($scope, $element, $attrs) {
        $element.addClass('fl-flex');
    }

    function FlFlexFillController($scope, $element, $attrs) {
        $element.addClass('fl-flex-grow');
    }

    function getTemplate($attrs) {
        console.log('Attrs in fl-flex', $attrs);
        return '';
    }
})();