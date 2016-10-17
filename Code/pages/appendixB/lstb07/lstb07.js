(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/appendixB/lstb07/lstb07.html", {
        ready: function (element, options) {
            var list = new WinJS.Binding.List(
                [{ name: "Doc1" }, { name: "Doc2" }, { name: "Doc3" }]
            );
            var listview = element.querySelector("#listview").winControl;
            listview.itemDataSource = list.dataSource;
            listview.itemTemplate = element.querySelector("#itemtemplate");
        }
    });
})();
