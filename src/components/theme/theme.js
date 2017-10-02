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