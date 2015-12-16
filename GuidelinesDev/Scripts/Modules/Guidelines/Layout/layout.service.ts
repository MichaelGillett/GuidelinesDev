interface Layout {
    accentColor: number;
    colors: string[];
    isThemeDark: boolean;
    selectAccentColor: any;
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
            colors: ['yellow', 'peach', 'lightblue', 'teal', 'grey1', 'grey2',
                     'orange', 'red', 'blue', 'darkteal', 'darkgrey1', 'darkgrey2'],
            isThemeDark: false,
            selectAccentColor: selectAccentColor,
            toggleTheme: toggleTheme
        }

        return service;

        function toggleTheme() {
            service.isThemeDark = !service.isThemeDark;
        }

        function selectAccentColor(index) {
            service.accentColor = index;
        }
    }
})();