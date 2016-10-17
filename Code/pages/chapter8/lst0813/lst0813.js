(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter8/lst0813/lst0813.html", {
        ready: function (element, options) {
            element.querySelector(".menu").onclick = function () { showHeaderMenu(element); };
        }
    });

    function showHeaderMenu(element) {
        var title = element.querySelector(".menu");
        var menu = element.querySelector("#headerMenu").winControl;
        menu.anchor = title;
        menu.placement = "bottom";
        menu.alignment = "left";

        menu.show();
    }
})();
