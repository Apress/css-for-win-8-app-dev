(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter7/lst0715/lst0715.html", {
        ready: function (element, options) {
            var numbersList = new WinJS.Binding.List();

            var list = document.querySelector(".lst0715 #list").winControl;
            list.itemTemplate = document.querySelector(".lst0715 #template");
            list.itemDataSource = numbersList.dataSource;

            for (var i = 1; i <= 11; i++) {
                numbersList.push(i);
            }
            
        }
    });
})();
