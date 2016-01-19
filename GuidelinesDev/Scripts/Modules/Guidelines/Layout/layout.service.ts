interface Layout {
    accentColor: number;
    collapseSidebar: any;
    closeSidebar: any;
    colors: string[];
    expandCollapseSidebar: any;
    expandSidebar: any;
    isSidebarCollapsed: boolean;
    isSidebarOpen: boolean;
    isThemeDark: boolean;
    openSidebar: any;
    selectAccentColor: any;
    toggleSidebar: any;
    toggleTheme: any;
}

(function () {
    'use strict';

    angular
        .module('guidelines')
        .factory('layoutService', layoutService);

    function layoutService() {
        var service: Layout = {
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
        }

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