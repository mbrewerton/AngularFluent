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
            return '<li class="fl-nav-item"><span class="fl-nav-item-light light-top"></span><a ng-href="{{ctrl.href}}" ng-transclude><span></span></a><span class="fl-nav-item-light light-bottom"></span></li>';
        }

        function FlNavItemController($element, $attrs) {
            var ctrl = this;
            ctrl.topLight = $element[0].firstChild;
            ctrl.bottomLight = $element[0].lastChild;
            ctrl.href = $attrs.href || $attrs.ngHref;
            
            console.log($element[0]);
            
            $element.on('mousemove', function(evt) {
                // console.log(evt.offsetX);
                var x = evt.offsetX - ($element[0].offsetWidth / 2)
                ctrl.topLight.style.left = x + 'px';
                ctrl.bottomLight.style.left = x + 'px';
            });

            RemoveAttrs($element);
        }

        function RemoveAttrs($element) {
            $element.removeAttr('ng-href');
            $element.removeAttr('href');
        }
}());