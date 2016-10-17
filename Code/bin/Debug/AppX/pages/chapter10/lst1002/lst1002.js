(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter10/lst1002/lst1002.html", {
        ready: function (element, options) {
            var numbersList = new WinJS.Binding.List();

            var list = document.querySelector(".lst1002 #list").winControl;
            list.itemTemplate = document.querySelector(".lst1002 #template");
            list.itemDataSource = numbersList.dataSource;

            for (var i = 1; i <= 11; i++) {
                numbersList.push(i);
            }
            
        }
    });
})();
