(function () {
    angular.module('angularFluent.components.flexDirection', ['angularFluent.core'])
        .directive('flFlexDirection', FlFlexDirection);

    function FlFlexDirection() {
        return flexDirection = {
            controller: ['$scope', '$element', '$attrs', FlFlexDirectionController],
            controllerAs: 'ctrl',
            restrict: 'A',
            scope: {
                flexDirection: '@flFlexDirection'
            },
            // template: getTemplate,
        };
    }

    function getTemplate(element, attrs) {
        console.log('attrs: ', attrs.flFlexDirection);
        return '<div class="fl-flex"><div class="fl-flex-direction-' + attrs.flFlexDirection + '" ng-transclude></div></div>'
    }

    function FlFlexDirectionController($scope, $element, $attrs) {
        var ctrl = this;
        ctrl.flexDirectionClass = 'fl-flex-direction-' + $scope.flexDirection;
        $element[0].classList.add(ctrl.flexDirectionClass);
        console.log(ctrl);
        console.log($scope);
    }
})();