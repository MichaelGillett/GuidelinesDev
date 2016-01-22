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

    layoutService.$inject = ['Windows'];

    function layoutService(Windows: any) {
        var service: Layout = {
            accentColor: 0,
            collapseSidebar: collapseSidebar,
            closeSidebar: closeSidebar,
            colors: ['rgba(255,185,0,255)', 'rgba(231,72,86,255)', 'rgba(0,120,215,255)', 'rgba(0,153,188,255)', 'rgba(122,117,116,255)', 'rgba(118,118,118,255)',
                'rgba(255,140,0,255)', 'rgba(232,17,35,255)', 'rgba(0,99,177,255)', 'rgba(45,125,154,255)', 'rgba(93,90,88,255)', 'rgba(76,74,72,255)',
                'rgba(247,99,12,255)', 'rgba(234,0,94,255)', 'rgba(142,140,216,255)', 'rgba(0,183,195,255)', 'rgba(104,118,138,255)', 'rgba(105,121,126,255)',
                'rgba(202,80,16,255)', 'rgba(195,0,82,255)', 'rgba(107,105,214,255)', 'rgba(3,131,135,255)', 'rgba(81,92,107,255)', 'rgba(74,84,89,255)',
                'rgba(218,59,1,255)', 'rgba(227,0,140,255)', 'rgba(135,100,184,255)', 'rgba(0,178,148,255)', 'rgba(86,124,115,255)', 'rgba(100,124,100,255)',
                'rgba(239,105,80,255)', 'rgba(191,0,119,255)', 'rgba(116,77,169,255)', 'rgba(1,133,116,255)', 'rgba(72,104,96,255)', 'rgba(82,94,84,255)',
                'rgba(209,52,56,255)', 'rgba(194,57,179,255)', 'rgba(177,70,194,255)', 'rgba(0,204,106,255)', 'rgba(73,130,5,255)', 'rgba(132,117,69,255)',
                'rgba(255,67,67,255)', 'rgba(154,0,137,255)', 'rgba(136,23,152,255)', 'rgba(16,137,62,255)', 'rgba(16,124,16,255)', 'rgba(126,115,95,255)'],
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

        initialise();

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

        function initialise() {
            if (Windows.Windows != undefined) {
                var uiSettings = new Windows.Windows.UI.ViewManagement.UISettings();
                var accent = uiSettings.getColorValue(Windows.Windows.UI.ViewManagement.UIColorType.accent);
                var accentRgba = "rgba(" + accent.r + "," + accent.g + "," + accent.b + "," + accent.a + ")";

                if (service.colors.indexOf(accentRgba) != -1) {
                    service.accentColor = service.colors.indexOf(accentRgba);
                }
            } else {
                service.accentColor = 0;
            }
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