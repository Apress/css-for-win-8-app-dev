(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter9/lst0920/lst0920.html", {
        ready: function (element, options) {
            var list = new WinJS.Binding.List(["one", "two", "three"]);
            var listViewElement = element.querySelector("[data-win-control='WinJS.UI.ListView']");
            var templateElement = element.querySelector("[data-win-control='WinJS.Binding.Template']");
            listViewElement.winControl.itemDataSource = list.dataSource;
            listViewElement.itemTemplate = templateElement;
        }
    });
})();
