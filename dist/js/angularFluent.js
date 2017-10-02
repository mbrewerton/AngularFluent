(function () {
    angular.module('angularFluent.core', [
        'ngAnimate',
        'angularFluent.components.button',
        'angularFluent.components.content',
        'angularFluent.components.dialog',
        'angularFluent.components.menu',
        'angularFluent.components.menuItem',
        'angularFluent.components.theme',
        'angularFluent.components.button',
    ]);
}());
(function () {
    angular.module('angularFluent.components.button', ['angularFluent.core'])
        .directive('flButton', function () {
            var controller = [
                '$scope', '$element', '$attrs',
                function ($scope, $element, $attrs) {
                    var self = this;
                    $element[0].classList.add('fl-button');

                    console.log('Initialised flButton');
                }
            ];

            return {
                restrict: 'E',
                controller: controller,
            }
        });
}());
(function () {
    angular.module('angularFluent.components.content', ['angularFluent.core'])
        .directive('flContent', function () {
            var controller = [
                '$scope', '$element', '$attrs',
                function ($scope, $element, $attrs) {
                    var self = this;
                    $element[0].classList.add('fl-content')
                    console.log();
                    console.log('Initialised flContent');
                }
            ];

            return {
                restrict: 'E',
                controller: controller,
            }
        });
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
    angular.module('angularFluent.components.menu', ['angularFluent.core'])
        .directive('flMenu', function () {
            var controller = [
                '$scope', '$element', '$attrs',
                function ($scope, $element, $attrs) {
                    var self = this;
                    $element[0].classList.add('fl-menu');
                }
            ];

            return {
                restrict: 'E',
                controller: controller
            }
        });
}());
(function () {
    angular.module('angularFluent.components.menuItem', ['angularFluent.core'])
        .directive('flMenuItem', function () {
            var controller = [
                '$scope', '$element', '$attrs',
                function ($scope, $element, $attrs) {
                    var self = this;
                    $element[0].classList.add('fl-menu-item');
                }
            ];

            return {
                restrict: 'E',
                controller: controller
            }
        });
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