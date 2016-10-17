(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter9/lst0922/lst0922.html", {
        ready: function (element, options) {
            var numbersList = new WinJS.Binding.List([1,2,3,4,5,6,7,8,9,10]).createGrouped(
                function(item) { return (item <= 5 ? "1-5" : "6-10"); },
                function (item) { return (item <= 5 ? "1-5" : "6-10"); }
            );
            var list1 = element.querySelector("#list1").winControl;
            list1.itemDataSource = numbersList.dataSource;
            list1.itemTemplate = element.querySelector("#itemtemplate");
            list1.groupDataSource = numbersList.groups.dataSource;
            list1.groupHeaderTemplate = element.querySelector("#grouptemplate");

            var list2 = element.querySelector("#list2").winControl;
            list2.itemDataSource = numbersList.groups.dataSource;
            list2.itemTemplate = element.querySelector("#semantictemplate");
        }
    });
})();
