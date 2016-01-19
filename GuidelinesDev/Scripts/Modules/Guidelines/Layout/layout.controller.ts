interface LayoutVM {
    layout: Layout;
    state: any;
    windowWidth: number;
}

(function () {
    'use strict';

    angular
        .module('guidelines')
        .controller('layoutController', LayoutController);

    LayoutController.$inject = ['layoutService', '$state', '$scope', '$window'];

    function LayoutController(layoutService: Layout, $state: any, $scope: any, $window: angular.IWindowService) {
        var vm: LayoutVM = this;

        vm.layout = layoutService;
        vm.state = $state;
        vm.windowWidth = $window.innerWidth;

        initialise();

        function initialise() {
            $window.addEventListener('resize', function () {
                $scope.$apply(function () {
                    if (window.innerWidth <= 640 && vm.layout.isSidebarOpen) {
                        vm.layout.closeSidebar();
                    }
                    vm.windowWidth = $window.innerWidth;
                });
            }, true);
        }
    }
})();