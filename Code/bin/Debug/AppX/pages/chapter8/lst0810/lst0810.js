(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter8/lst0810/lst0810.html", {
        ready: function (element, options) {
            var showFlyoutButton = element.querySelector("#showFlyoutButton");
            var flyout = element.querySelector("#flyout1");
            showFlyoutButton.onclick = function(e) {
                flyout.winControl.show(showFlyoutButton);
            }
        }
    });
})();
