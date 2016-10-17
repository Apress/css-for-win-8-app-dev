(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter7/lst0717/lst0717.html", {
        ready: function (element, options) {
            var numbersList = new WinJS.Binding.List();

            var list = document.querySelector(".lst0717 #list").winControl;
            list.itemTemplate = document.querySelector(".lst0717 #template");
            list.itemDataSource = numbersList.dataSource;
            list.layout.groupInfo = function () { return { enableCellSpanning: true, cellWidth: 160, cellHeight: 160 }; };

            for (var i = 1; i <= 11; i++) {
                numbersList.push({ number: i, size: calculateSize(i) });
            }
        }
    });
    
    function calculateSize(n) { return (n == 1 ? "oversized" : "normal"); }
})();
