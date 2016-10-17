(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter6/lst0627/lst0627.html", {
        ready: function (element, options) {
            var d = document.querySelector(".lst0627 .parent");
            d.style.color = "red";
            d.style.transform = new MSCSSMatrix(d.style.transform).rotate(0, 0, -10);
        }
    });
})();
