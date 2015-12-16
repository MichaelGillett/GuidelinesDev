interface LayoutVM {
    layout: Layout;
    state: any;
}

(function () {
    'use strict';

    angular
        .module('guidelines')
        .controller('layoutController', LayoutController);

    LayoutController.$inject = ['layoutService', '$state'];

    function LayoutController(layoutService: Layout, $state: any) {
        var vm: LayoutVM = this;

        vm.layout = layoutService;
        vm.state = $state;
    }
})();