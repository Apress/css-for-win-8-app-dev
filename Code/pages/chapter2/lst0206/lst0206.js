(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter2/lst0206/lst0206.html", {
        ready: function (element, options) {
            document.getElementById("myButton").onclick = function(e) {
                Windows.UI.Popups.MessageDialog("Hello").showAsync();
            };
        }
    });
})();
