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
                template: GetTemplate
            }
        }

        function GetTemplate() {
            return '<a class="fl-nav-item"><span class="fl-nav-item-light light-top"></span><span ng-transclude></span><span class="fl-nav-item-light light-bottom"></span></a>';
        }

        function FlNavItemController($element) {
            var ctrl = this;
            ctrl.topLight = $element[0].firstChild;
            ctrl.bottomLight = $element[0].lastChild;
            console.log($element[0]);
            
            $element.on('mousemove', function(evt) {
                // console.log(evt.offsetX);
                console.log(ctrl);
                var x = evt.offsetX * 2;
                ctrl.topLight.style.left = x + 'px';
                ctrl.bottomLight.style.left = x + 'px';
            });
        }
}());