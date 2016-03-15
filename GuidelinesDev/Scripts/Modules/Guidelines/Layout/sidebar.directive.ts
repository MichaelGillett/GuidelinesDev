(function () {
    'use strict';

    angular
        .module('guidelines')
        .directive('sidebar', sidebar);

    function sidebar() {
        var directive = {
            templateUrl: '../Scripts/Modules/Guidelines/Layout/Sidebar.html',
            restrict: 'EA'
        };
        return directive;
    }
})();