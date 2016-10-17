(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter7/lst0716/lst0716.html", {
        ready: function (element, options) {
            var numbersList = new WinJS.Binding.List().createGrouped(
                function(n) { return (n % 2 == 0 ? "even" : "odd"); },
                function(n) { return (n % 2 == 0 ? "even" : "odd"); }
            );

            var list = document.querySelector(".lst0716 #list").winControl;
            list.itemTemplate = document.querySelector(".lst0716 #template");
            list.itemDataSource = numbersList.dataSource;
            list.itemHeaderTemplate = document.querySelector(".lst0716 #headerTemplate");
            list.groupDataSource = numbersList.groups.dataSource;

            for (var i = 1; i <= 11; i++) {
                numbersList.push(i);
            }
        }
    });
})();
