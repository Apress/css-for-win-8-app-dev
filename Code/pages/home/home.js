(function () {
    "use strict";

    var chapters = [
        { name: "Chapter 1", key: "chapter1", number: "01", enabled: false },
        { name: "Chapter 2", key: "chapter2", number: "02", enabled: true },
        { name: "Chapter 3", key: "chapter3", number: "03", enabled: true },
        { name: "Chapter 4", key: "chapter4", number: "04", enabled: true },
        { name: "Chapter 5", key: "chapter5", number: "05", enabled: true },
        { name: "Chapter 6", key: "chapter6", number: "06", enabled: true },
        { name: "Chapter 7", key: "chapter7", number: "07", enabled: true },
        { name: "Chapter 8", key: "chapter8", number: "08", enabled: true },
        { name: "Chapter 9", key: "chapter9", number: "09", enabled: true },
        { name: "Chapter 10", key: "chapter10", number: "10", enabled: true },
        { name: "Appendix A", key: "appendixA", number: "11", enabled: false },
        { name: "Appendix B", key: "appendixB", number: "12", enabled: true }
    ];
    
    WinJS.UI.Pages.define("/pages/home/home.html", {
        ready: function (element, options) {
            chapters.forEach(function (c) {
                if(c.enabled){
                    c.click = function (e) { WinJS.Navigation.navigate("/pages/chapter/chapter.html", c); };
                    c.click.supportedForProcessing = true;
                }
                c.className = "tile" + (c.enabled ? "" : " dim");
            });
            var chaptersList = new WinJS.Binding.List(chapters);

            var list = document.querySelector("div[data-win-control='WinJS.UI.ListView']").winControl;
            list.itemDataSource = chaptersList.dataSource;
            list.itemTemplate = document.querySelector("div[data-win-control='WinJS.Binding.Template']");
        }
    });
})();
