(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter8/lst0808/lst0808.html", {
        ready: function (element, options) {
            addSettingsContract()
        }
    });

    function addSettingsContract() {
        app.onsettings = function (e) {
            e.detail.applicationcommands = {
                "sampleSettings": {
                    title: "Listing 8-8",
                    href: "/pages/chapter8/lst0808/lst0808.html"
                }
            };
            WinJS.UI.SettingsFlyout.populateSettings(e);
        };
    }

})();
