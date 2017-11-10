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
            return '<a class="fl-nav-item"><span id="{{ctrl.elementId}}" ng-transclude></span></a>';
        }

        function FlNavItemController($element) {
            var ctrl = this;
            ctrl.parent = $element.parent();
            ctrl.elementId = GenerateId()
            ctrl.light = {
                top: {
                    id: GenerateId(),
                    template: '<span class="fl-nav-item-light fl-nav-item-light-top" id="' + ctrl.light.top.id + '"></span>'
                },
                bottom: {
                    id: GenerateId(),
                    template: '<span class="fl-nav-item-light fl-nav-item-light-bottom" id="' + ctrl.light.bottom.id + '"></span>'
                }
            };
            
            $element.on('mousemove', function(evt) {
                console.log(evt.offsetX);
            });
        }

        function GenerateId() {
            var id = '';
            for (var i = 0; i < 26; i++) {
                id += Math.round(Math.random() * i);
            }
            return id;
        }
}());