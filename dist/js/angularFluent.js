(function () {
    angular.module('angularFluent.core', [
        'ngAnimate',
        'angularFluent.components.button',
        'angularFluent.components.content',
        'angularFluent.components.dialog',
        'angularFluent.components.flexDirection',
        'angularFluent.components.nav',
        'angularFluent.components.navItem',
        'angularFluent.components.theme',
        'angularFluent.components.button',
        'angularFluent.layout'
    ]);
}());
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
(function () {
    angular.module('angularFluent.components.content', ['angularFluent.core'])
        .directive('flContent', FlContent);

        function FlContent () {
            return {
                restrict: 'E',
                transclude: true,
                controller: FlContentController,
                controllerAs: 'ctrl',
                template: '<div class="fl-content" ng-transclude></div>'
            }
        }

        function FlContentController($scope, $element, $attrs) {
            var ctrl = this;
        }
}());
(function () {
    angular.module('angularFluent.components.dialog', ['angularFluent.core'])
        .directive('flDialog', function () {
            var controller = [
                '$scope', '$element', '$attrs',
                function ($scope, $element, $attrs) {
                    var self = this;
                    $scope.vm = {
                        show: $scope.show,
                        header: $scope.header
                    }
                    $element[0].classList.add('fl-dialog');
                }
            ];

            return {
                restrict: 'E',
                controller: controller,
                scope: {
                    show: '=flDialogShow',
                    header: '@flDialogHeader'
                },
                template: '<div class="fl-dialog-content"><div class="fl-glass"><h1 class="fl-dialog-header">{{vm.header}}</h1></div></div>'
            }
        });
}());
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
                template: '<nav role="navigation"><div class="fl-nav" ng-transclude></div></nav>'
            };
        }

        function FlNavController() {

        }
})();
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
                template: '<a class="fl-nav-item">{{ctrl.lightTop}}<p ng-transclude></p></a>'
            }
        }

        function GetTemplate() {

        }

        function FlNavItemController($element) {
            var ctrl = this;
            ctrl.parent = $element.parent();
            ctrl.lightTemplate = '<span class="fl-nav-item-light"></span>';
            ctrl.lightTop = angular.element(ctrl.lightTemplate);
            ctrl.lightBottom = angular.element(ctrl.lightTemplate);
            
            $element.on('mousemove', function(evt) {
                console.log(evt.offsetX);
            });
        }
}());
(function () {
    angular.module('angularFluent.components.theme', ['angularFluent.core'])
        .directive('flTheme', function () {
            var controller = [
                '$scope', '$attrs',
                function ($scope, $attrs) {
                    var self = this;
                    var loweredThemeName = $attrs.flTheme.toLowerCase() || null;
                    switch (loweredThemeName) {
                        case 'default':
                        case null:
                            console.log('Using default theme.');
                    }
                    console.log('Init flTheme');
                }
            ];

            return {
                restrict: 'A',
                controller: controller,
                scope: true
            }
        });
}());
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