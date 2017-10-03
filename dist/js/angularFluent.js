(function () {
    angular.module('angularFluent.core', [
        'ngAnimate',
        'angularFluent.components.button',
        'angularFluent.components.content',
        'angularFluent.components.dialog',
        'angularFluent.components.nav',
        'angularFluent.components.navItem',
        'angularFluent.components.theme',
        'angularFluent.components.button',
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
                return '<button class="fl-button" ng-transclude></button>'
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
// (function () {
//     angular.module('angularFluent.components.nav', ['angularFluent.core'])
//         .controller('flNavController', FlNavController)
//         .directive('flNav', FlNav);

//     function FlNav() {
//         return {
//             restrict: 'E',
//             controller: FlNavController,
//             controllerAs: 'ctrl',
//             template: '<div class="fl-nav"></div>'
//         }
//     }

//     function FlNavController($scope, $element, $attrs) {
//         var self = this;
//     }
// }());

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
                template: '<li class="fl-nav-item" ng-transclude></li>'
            }
        }

        function FlNavItemController() {
            var ctrl = this;
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