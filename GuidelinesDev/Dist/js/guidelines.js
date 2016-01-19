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
    LayoutController.$inject = ['layoutService', '$state', '$scope', '$window'];
    function LayoutController(layoutService, $state, $scope, $window) {
        var vm = this;
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
;(function () {
    'use strict';
    angular
        .module('guidelines')
        .factory('layoutService', layoutService);
    function layoutService() {
        var service = {
            accentColor: 0,
            collapseSidebar: collapseSidebar,
            closeSidebar: closeSidebar,
            colors: ['yellow', 'peach', 'lightblue', 'teal', 'grey1', 'grey2',
                'orange', 'red', 'blue', 'darkteal', 'darkgrey1', 'darkgrey2',
                'darkorange', 'magenta', 'lilac', 'turquoise', 'bluegrey1', 'bluegrey2',
                'rust', 'darkmagenta', 'lavendar', 'darkturquoise', 'darkbluegrey1', 'darkbluegrey2',
                'bloodorange', 'pink', 'darklavendar', 'lime', 'greengrey', 'greengrey2',
                'lighbloodorange', 'darkpink', 'indigo', 'darklime', 'darkgreengrey1', 'darkgreengrey2',
                'darksalmon', 'lightpurple', 'lightindigo', 'brightgreen', 'grass', 'khaki',
                'salmon', 'purple', 'darkPurple', 'green', 'darkgreen', 'tan'],
            expandCollapseSidebar: expandCollapseSidebar,
            expandSidebar: expandSidebar,
            isSidebarCollapsed: false,
            isSidebarOpen: false,
            isThemeDark: false,
            openSidebar: openSidebar,
            selectAccentColor: selectAccentColor,
            toggleSidebar: toggleSidebar,
            toggleTheme: toggleTheme
        };
        return service;
        function collapseSidebar() {
            service.isSidebarCollapsed = true;
        }
        function closeSidebar() {
            service.isSidebarOpen = false;
        }
        function expandCollapseSidebar() {
            service.isSidebarCollapsed = !service.isSidebarCollapsed;
        }
        function expandSidebar() {
            service.isSidebarCollapsed = false;
        }
        function openSidebar() {
            service.isSidebarOpen = true;
        }
        function selectAccentColor(index) {
            service.accentColor = index;
        }
        function toggleSidebar() {
            service.isSidebarOpen = !service.isSidebarOpen;
        }
        function toggleTheme() {
            service.isThemeDark = !service.isThemeDark;
        }
    }
})();
