angular.module('templates-main', ['../Scripts/Modules/Guidelines/ControlsAndPatterns/controlsandpatterns.html', '../Scripts/Modules/Guidelines/Home/Home.html', '../Scripts/Modules/Guidelines/Layout/Sidebar.html', '../Scripts/Modules/Guidelines/Privacy/Privacy.html', '../Scripts/Modules/Guidelines/Settings/Settings.html']);

angular.module("../Scripts/Modules/Guidelines/ControlsAndPatterns/controlsandpatterns.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../Scripts/Modules/Guidelines/ControlsAndPatterns/controlsandpatterns.html",
    "<header ng-class=\"{ 'collapsed' : layoutCtrl.layout.isSidebarCollapsed}\">\n" +
    "    <p>{{layoutCtrl.state.current.name}}</p>\n" +
    "    <div class=\"actionBar\">\n" +
    "        <ul>\n" +
    "            <li><a href=\"#\" ui-sref=\"home\"><span class=\"icon action\">&#xE80f</span></a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</header>\n" +
    "<div ng-click=\"layoutCtrl.layout.closeSidebar()\">\n" +
    "    <div class=\"control\">\n" +
    "        <h2>Links</h2>\n" +
    "        <p class=\"info\">Changes based on accent colour. Supports :focus, :hover and :active states.</p>\n" +
    "        <a href=\"\">An example link</a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h2>Buttons</h2>\n" +
    "        <div class=\"contentGroup\">\n" +
    "            <h3>Default button</h3>\n" +
    "            <p class=\"info\">Changes based on theme colour. Supports :focus, :hover and :active states. Can be disabled.</p>\n" +
    "            <button>Button</button>\n" +
    "            <button disabled>Button</button>\n" +
    "        </div>\n" +
    "        <div class=\"contentGroup\">\n" +
    "            <h3>Accent button</h3>\n" +
    "            <p class=\"info\">Changes based on accent colour. Supports :focus, :hover and :active states. Can be disabled.</p>\n" +
    "            <button class=\"accentButton\">Button</button>\n" +
    "            <button class=\"accentButton\" disabled>Button</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h2>Check boxes</h2>\n" +
    "        <div class=\"contentGroup\">\n" +
    "            <p class=\"info\">Changes based on theme colour. Supports :focus, :hover and :active states. Can be disabled.</p>\n" +
    "            <form action=\"\">\n" +
    "                <div>\n" +
    "                    <input type=\"checkbox\" value=\"1\" id=\"checkbox1\" class=\"checkbox\">\n" +
    "                    <label for=\"checkbox1\" class=\"checkboxLabel\">Option 1</label>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                    <input type=\"checkbox\" value=\"2\" id=\"checkbox2\" class=\"checkbox\">\n" +
    "                    <label for=\"checkbox2\" class=\"checkboxLabel\">Option 2</label>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                    <input type=\"checkbox\" value=\"3\" id=\"checkbox3\" class=\"checkbox\">\n" +
    "                    <label for=\"checkbox3\" class=\"checkboxLabel\">Option 3</label>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h2>Radio boxes</h2>\n" +
    "        <p class=\"info\">Checked state changes based on accent colour. Supports :hover, :focus and :checked states.</p>\n" +
    "        <div>\n" +
    "            <div class=\"radioContainer\">\n" +
    "                <input type=\"radio\" id=\"Option1\" name=\"radio1\" value=\"Option1\" class=\"radioInput\" /><label for=\"Option1\">Option 1</label>\n" +
    "            </div>\n" +
    "            <div class=\"radioContainer\">\n" +
    "                <input type=\"radio\" id=\"Option2\" name=\"radio1\" value=\"Option2\" class=\"radioInput\" /><label for=\"Option2\">Option 2</label>\n" +
    "            </div>\n" +
    "            <div class=\"radioContainer\">\n" +
    "                <input type=\"radio\" id=\"Option3\" name=\"radio1\" value=\"Option3\" class=\"radioInput\" /><label for=\"Option3\">Option 3</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h2>Text Inputs</h2>\n" +
    "        <p class=\"info\">Enabled state changes based on accent colour. Supports :hover state.</p>\n" +
    "        <div>\n" +
    "            <input type=\"text\" />\n" +
    "        </div>\n" +
    "        <div style=\"margin-top: 10px;\">\n" +
    "            <select>\n" +
    "                <option>Option 1</option>\n" +
    "                <option>Option 2</option>\n" +
    "                <option>Option 3</option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h2>Toggle Switches</h2>\n" +
    "        <p class=\"info\">Enabled state changes based on accent colour. Supports :hover state.</p>\n" +
    "        <div>\n" +
    "            <p>Toggle switch 1</p>\n" +
    "            <input type=\"checkbox\" id=\"switch1\" name=\"switch1\" class=\"toggleSwitch\" ng-model=\"switch1\" />\n" +
    "            <label for=\"switch1\"><span ng-show=\"switch1\">On</span><span ng-hide=\"switch1\">Off</span></label>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <p>Toggle switch 2</p>\n" +
    "            <input type=\"checkbox\" id=\"switch2\" name=\"switch2\" class=\"toggleSwitch\" ng-model=\"switch2\" />\n" +
    "            <label for=\"switch2\"><span ng-show=\"switch2\">On</span><span ng-hide=\"switch2\">Off</span></label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../Scripts/Modules/Guidelines/Home/Home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../Scripts/Modules/Guidelines/Home/Home.html",
    "<header ng-class=\"{ 'collapsed' : layoutCtrl.layout.isSidebarCollapsed}\">\n" +
    "    <p>{{layoutCtrl.state.current.name}}</p>\n" +
    "    <div class=\"actionBar\">\n" +
    "        <ul>\n" +
    "            <li><a href=\"http://twitter.com/michaelgillett\"><span class=\"icon action\">&#xE13D</span></a></li>\n" +
    "            <li><a href=\"https://www.microsoft.com/store/apps/9NBLGGH5DN8D\"><span class=\"icon action\">&#xE896</span></a></li>\n" +
    "            <li><a href=\"https://github.com/MichaelGillett/GuidelinesDev\"><span class=\"icon action\">&#xE104</span></a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</header>\n" +
    "<div ng-click=\"layoutCtrl.layout.closeSidebar()\">\n" +
    "    <h2 class=\"center\"><span class=\"icon\">&#xE12C</span></h2>\n" +
    "    <h2 class=\"center\">Welcome to GuidelinesDev</h2>\n" +
    "    <p class=\"center\">GuidelinesDev  is a set of tools, CSS and AngularJS, for developers to make any website, but specifically Hosted Web Apps, look like native apps on Windows 10</p>\n" +
    "    <p class=\"center\"><a href=\"http://microsoftedge.github.io/WebAppsDocs/en-US/win10/HWA.htm\">Find out more about Hosted Web Apps</a></p>\n" +
    "    <h2 class=\"center\"><span class=\"icon\">&#xE212</span></h2>\n" +
    "    <h2 class=\"center\">Responsive</h2>\n" +
    "    <p class=\"center\">The layout and controls are designed to work across all screen and devices types just like the inbuilt elements of native Windows 10 apps</p>\n" +
    "    <h2 class=\"center\"><span class=\"icon\">&#xE104</span></h2>\n" +
    "    <h2 class=\"center\">GitHub</h2>\n" +
    "    <p class=\"center\">You can view and download the source code for GuidelinesDev from github and, if you want, you can even create pull requests</p>\n" +
    "    <p class=\"center\"><a href=\"https://github.com/MichaelGillett/GuidelinesDev\">Visit the GitHub repo</a></p>\n" +
    "    <h2 class=\"center\"><span class=\"icon\">&#xE896</span></h2>\n" +
    "    <h2 class=\"center\">Download</h2>\n" +
    "    <p class=\"center\">Download the hosted web app to your Windows 10 device</p>\n" +
    "    <p class=\"center\"><a href=\"https://www.microsoft.com/store/apps/9NBLGGH5DN8D\">Download from the Windows Store</a></p>\n" +
    "    <h2 class=\"center\"><span class=\"icon\">&#xE13D</span></h2>\n" +
    "    <h2 class=\"center\">Michael Gillett</h2>\n" +
    "    <p class=\"center\">GuidelinesDev was created by web developer Michael Gillett, MVP (Windows Experience) since 2012. If you have any comments or questions about Guidelines then please get in touch on Twitter <a href=\"http://twitter.com/michaelgillett\">@MichaelGillett</a></p>\n" +
    "</div>");
}]);

angular.module("../Scripts/Modules/Guidelines/Layout/Sidebar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../Scripts/Modules/Guidelines/Layout/Sidebar.html",
    "<div class=\"hamburger-container\" ng-class=\"{ 'collapsed' : layoutCtrl.layout.isSidebarCollapsed}\">\n" +
    "    <div class=\"hamburger\" ng-click=\"layoutCtrl.windowWidth < 640 ? layoutCtrl.layout.toggleSidebar() : layoutCtrl.layout.expandCollapseSidebar()\">\n" +
    "        <div class=\"mdl2-menu icon\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<section class=\"sidebar\" ng-class=\"{ 'open' : layoutCtrl.layout.isSidebarOpen, 'collapsed' : layoutCtrl.layout.isSidebarCollapsed}\">\n" +
    "    <ul>\n" +
    "        <li ui-sref=\"home\" ui-sref-active=\"active\"><div class=\"mdl2-home icon\"></div><div class=\"title\">Home</div></li>\n" +
    "        <li ui-sref=\"controls and patterns\" ui-sref-active=\"active\"><div class=\"mdl2-controls icon\"></div><div class=\"title\">Controls and Patterns</div></li>\n" +
    "        <li ui-sref=\"settings\" ui-sref-active=\"active\"><div class=\"mdl2-settings icon\"></div><div class=\"title\">Settings</div></li>\n" +
    "    </ul>\n" +
    "</section>\n" +
    "");
}]);

angular.module("../Scripts/Modules/Guidelines/Privacy/Privacy.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../Scripts/Modules/Guidelines/Privacy/Privacy.html",
    "<header ng-class=\"{ 'collapsed' : layoutCtrl.layout.isSidebarCollapsed}\">\n" +
    "    <p>{{layoutCtrl.state.current.name}}</p>\n" +
    "    <div class=\"actionBar\">\n" +
    "        <ul>\n" +
    "            <li><a href=\"#\" ui-sref=\"home\"><span class=\"icon action\">&#xE80f</span></a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</header>\n" +
    "<div ng-click=\"layoutCtrl.layout.closeSidebar()\">\n" +
    "    <h2>Privacy Policy</h2>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h3>What is this Privacy Policy for?</h3>\n" +
    "\n" +
    "        <p>This privacy policy is for the Guidelines Dev app and website and governs the privacy of its users who choose to use it.</p>\n" +
    "\n" +
    "        <p>The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website and website owners. Furthermore the way this website processes, stores and protects user data and information will also be detailed within this policy.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h3>The Website and app</h3>\n" +
    "\n" +
    "        <p>This website and app and its owners take a proactive approach to user privacy and ensure the necessary steps are taken to protect the privacy of its users throughout their visiting and usage experience. This website and app complies to all UK national laws and requirements for user privacy.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h3>Use of Cookies</h3>\n" +
    "\n" +
    "        <p>This website and app uses cookies to better the users experience while visiting the website and using the app. Where applicable this website and app uses a cookie control system allowing the user on their first visit to the website to allow or disallow the use of cookies on their computer / device. This complies with recent legislation requirements for websites to obtain explicit consent from users before leaving behind or reading files such as cookies on a user's computer / device.</p>\n" +
    "\n" +
    "        <p>Cookies are small files saved to the user's computers hard drive that track, save and store information about the user's interactions and usage of the website. This allows the website, through its server to provide the users with a tailored experience within this website.</p>\n" +
    "        <p>Users are advised that if they wish to deny the use and saving of cookies from this website on to their computers hard drive they should take necessary steps within their web browsers security settings to block all cookies from this website and its external serving vendors.</p>\n" +
    "\n" +
    "        <p>This website uses tracking software to monitor its visitors to better understand how they use it. This software is provided by Google Analytics which uses cookies to track visitor usage. The software will save a cookie to your computers hard drive in order to track and monitor your engagement and usage of the website, but will not store, save or collect personal information. You can read Google's privacy policy here for further information [ http://www.google.com/privacy.html ].</p>\n" +
    "\n" +
    "        <p>Other cookies may be stored to your computers hard drive by external vendors when this website uses referral programs, sponsored links or adverts. Such cookies are used for conversion and referral tracking and typically expire after 30 days, though some may take longer. No personal information is stored, saved or collected.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h3>Contact & Communication</h3>\n" +
    "\n" +
    "        <p>Users contacting this website and/or its owners do so at their own discretion and provide any such personal details requested at their own risk. Your personal information is kept private and stored securely until a time it is no longer required or has no use, as detailed in the Data Protection Act 1998. Every effort has been made to ensure a safe and secure form to email submission process but advise users using such form to email processes that they do so at their own risk.</p>\n" +
    "\n" +
    "        <p>This website and its owners use any information submitted to provide you with further information about the products / services they offer or to assist you in answering any questions or queries you may have submitted. This includes using your details to subscribe you to any email newsletter program the website operates but only if this was made clear to you and your express permission was granted when submitting any form to email process. Or whereby you the consumer have previously purchased from or enquired about purchasing from the company a product or service that the email newsletter relates to. This is by no means an entire list of your user rights in regard to receiving email marketing material. Your details are not passed on to any third parties.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h3>External Links</h3>\n" +
    "\n" +
    "        <p>Although this website only looks to include quality, safe and relevant external links, users are advised adopt a policy of caution before clicking any external web links mentioned throughout this website. (External links are clickable text / banner / image links to other websites)</p>\n" +
    "\n" +
    "        <p>The owners of this website cannot guarantee or verify the contents of any externally linked website despite their best efforts. Users should therefore note they click on external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h3>Social Media Platforms</h3>\n" +
    "\n" +
    "        <p>Communication, engagement and actions taken through external social media platforms that this website and its owners participate on are custom to the terms and conditions as well as the privacy policies held with each social media platform respectively.</p>\n" +
    "\n" +
    "        <p>Users are advised to use social media platforms wisely and communicate / engage upon them with due care and caution in regard to their own privacy and personal details. This website nor its owners will ever ask for personal or sensitive information through social media platforms and encourage users wishing to discuss sensitive details to contact them through primary communication channels such as by telephone or email.</p>\n" +
    "\n" +
    "        <p>This website may use social sharing buttons which help share web content directly from web pages to the social media platform in question. Users are advised before using such social sharing buttons that they do so at their own discretion and note that the social media platform may track and save your request to share a web page respectively through your social media platform account.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <p>v.1.0 February 2016 Edited & customised by Michael Gillett</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../Scripts/Modules/Guidelines/Settings/Settings.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../Scripts/Modules/Guidelines/Settings/Settings.html",
    "<header ng-class=\"{ 'collapsed' : layoutCtrl.layout.isSidebarCollapsed}\">\n" +
    "    <p>{{layoutCtrl.state.current.name}}</p>\n" +
    "    <div class=\"actionBar\">\n" +
    "        <ul>\n" +
    "            <li><a href=\"#\" ui-sref=\"home\"><span class=\"icon action\">&#xE80f</span></a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</header>\n" +
    "<div ng-click=\"layoutCtrl.layout.closeSidebar()\">\n" +
    "    <h2>Guidelines Settings</h2>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h3>Toggle theme</h3>\n" +
    "        <p>Enable dark theme</p>\n" +
    "        <input type=\"checkbox\" id=\"switch1\" name=\"switch1\" class=\"toggleSwitch\" ng-model=\"layoutCtrl.layout.isThemeDark\" />\n" +
    "        <label for=\"switch1\"><span ng-show=\"layoutCtrl.layout.isThemeDark\">On</span><span ng-hide=\"layoutCtrl.layout.isThemeDark\">Off</span></label>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h3>Select accent color</h3>\n" +
    "        <p>If the app is installed it will default to your selected accent colour, sadly it can't do it for websites (yet)</p>\n" +
    "        <div class=\"colorSquaresContainer\">\n" +
    "            <div class=\"colorSquare accentColor-{{$index + 1}}\" ng-repeat=\"color in layoutCtrl.layout.colors\" ng-click=\"layoutCtrl.layout.selectAccentColor($index)\" ng-class=\"{'selected' : layoutCtrl.layout.accentColor == $index}\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"control\">\n" +
    "        <h3>Links</h3>\n" +
    "        <div><a href=\"http://twitter.com/michaelgillett\">@MichaelGillett</a></div>\n" +
    "        <div><a ui-sref=\"privacy\">Privacy Policy</a></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
;(function () {
    'use strict';
    angular
        .module('guidelines', [
        'ui.router',
        'templates-main'
    ]);
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
    layoutService.$inject = ['Windows'];
    function layoutService(Windows) {
        var service = {
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
        };
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
            }
            else {
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
;(function () {
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
;(function () {
    'use strict';
    angular
        .module('guidelines')
        .controller('WindowsController', WindowsController);
    WindowsController.$inject = ['Windows'];
    function WindowsController(Windows) {
        var vm = this;
        if (Windows.Windows != "") {
            console.log(Windows);
            vm.Windows = Windows.Windows;
            var uiSettings = new Windows.Windows.UI.ViewManagement.UISettings();
            var color = uiSettings.getColorValue(Windows.Windows.UI.ViewManagement.UIColorType.accent);
            vm.color = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
            console.log(vm.color);
        }
        else {
            vm.Windows = "Hello";
            vm.color = "rgba(0,99,177,255)";
        }
    }
})();
