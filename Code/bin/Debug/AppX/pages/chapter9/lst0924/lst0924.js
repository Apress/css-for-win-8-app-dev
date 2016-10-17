(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter9/lst0924/lst0924.html", {
        ready: function (element, options) {
            var flipview = element.querySelector("#flipview").winControl;
            var template = element.querySelector("#template");

            var fruitList = new WinJS.Binding.List(["/pages/chapter9/lst0924/peaches.png", "/pages/chapter9/lst0924/grapes.png", "/pages/chapter9/lst0924/orange.png"]);
            flipview.itemDataSource = fruitList.dataSource;
            flipview.itemTemplate = template;
            
        }
    });
})();
