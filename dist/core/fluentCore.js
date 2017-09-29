angular.module('angularFluent', [
    'ngRoute',
    // 'ngAnimate'
]);

angular.module('angularFluent')
    .directive('flTheme', function() {
        var controller = [
            '$scope', '$attrs',
            function($scope, $attrs) {
                var self = this;
                var loweredThemeName = $attrs.flTheme.toLowerCase() || null;
                switch(loweredThemeName) {
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

angular.module('angularFluent')
    .directive('flMenu', function() {
        var controller = [
            '$scope', '$element', '$attrs',
            function($scope, $element, $attrs) {
                var self = this;
                $element[0].classList.add('fl-menu');
            }
        ];

        return {
            restrict: 'E',
            controller: controller
        }
    });

angular.module('angularFluent')
    .directive('flMenuItem', function() {
        var controller = [
            '$scope', '$element', '$attrs',
            function($scope, $element, $attrs) {
                var self = this;
                $element[0].classList.add('fl-menu-item');
            }
        ];

        return {
            restrict: 'E',
            controller: controller
        }
    });

angular.module('angularFluent')
    .directive('flButton', function() {
        var controller = [
            '$scope', '$element', '$attrs',
            function($scope, $element, $attrs) {
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

angular.module('angularFluent')
    .directive('flContent', function() {
        var controller = [
            '$scope', '$element', '$attrs',
            function($scope, $element, $attrs) {
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