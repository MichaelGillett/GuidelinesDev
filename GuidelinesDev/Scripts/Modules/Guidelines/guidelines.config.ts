﻿(function () {
    'use strict';

    angular
        .module('guidelines')
        .config(guidelinesConfig);

    function guidelinesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "../Scripts/Modules/Guidelines/Home/Home.html"
            })
            .state('controls and patterns', {
                url: "/controlsandpatterns",
                templateUrl: "../Scripts/Modules/Guidelines/ControlsAndPatterns/controlsandpatterns.html"
            })
            .state('settings', {
                url: "/settings",
                templateUrl: "../Scripts/Modules/Guidelines/Settings/Settings.html"
            })
            .state('privacy', {
                url: "/privacy",
                templateUrl: "../Scripts/Modules/Guidelines/Privacy/Privacy.html"
            });
    }
})();