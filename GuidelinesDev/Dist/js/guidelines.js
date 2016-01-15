(function () {
    'use strict';
    angular
        .module('guidelines', ['ui.router']);
})();
;(function () {
    'use strict';
    angular
        .module('guidelines')
        .config(guidelinesConfig);
    function guidelinesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
            url: "/",
            templateUrl: "Scripts/Modules/Guidelines/Home/home.html"
        })
            .state('controls and patterns', {
            url: "/controlsandpatterns",
            templateUrl: "Scripts/Modules/Guidelines/ControlsAndPatterns/controlsandpatterns.html"
        })
            .state('settings', {
            url: "/settings",
            templateUrl: "Scripts/Modules/Guidelines/Settings/settings.html"
        });
    }
})();
;(function () {
    'use strict';
    angular
        .module('guidelines')
        .controller('layoutController', LayoutController);
    LayoutController.$inject = ['layoutService', '$state'];
    function LayoutController(layoutService, $state) {
        var vm = this;
        vm.layout = layoutService;
        vm.state = $state;
        console.log(vm.layout.colors);
    }
})();
;(function () {
    'use strict';
    angular
        .module('guidelines')
        .factory('layoutService', layoutService);
    function layoutService() {
        var service = {
            accentColor: 0,
            colors: ['yellow', 'peach', 'lightblue', 'teal', 'grey1', 'grey2',
                'orange', 'red', 'blue', 'darkteal', 'darkgrey1', 'darkgrey2',
                'darkorange', 'magenta', 'lilac', 'turquoise', 'bluegrey1', 'bluegrey2',
                'rust', 'darkmagenta', 'lavendar', 'darkturquoise', 'darkbluegrey1', 'darkbluegrey2',
                'bloodorange', 'pink', 'darklavendar', 'lime', 'greengrey', 'greengrey2',
                'lighbloodorange', 'darkpink', 'indigo', 'darklime', 'darkgreengrey1', 'darkgreengrey2',
                'darksalmon', 'lightpurple', 'lightindigo', 'brightgreen', 'grass', 'khaki',
                'salmon', 'purple', 'darkPurple', 'green', 'darkgreen', 'tan'],
            isThemeDark: false,
            selectAccentColor: selectAccentColor,
            toggleTheme: toggleTheme
        };
        console.log(service.colors);
        return service;
        function toggleTheme() {
            service.isThemeDark = !service.isThemeDark;
        }
        function selectAccentColor(index) {
            service.accentColor = index;
        }
    }
})();
