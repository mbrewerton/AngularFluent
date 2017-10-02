angular.module('angularFluent.components.content', ['angularFluent.core', 'angularfluent.components'])
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