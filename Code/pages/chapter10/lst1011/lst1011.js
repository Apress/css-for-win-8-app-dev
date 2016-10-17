(function () {
    "use strict";

    var products = [
        {name: "Widget 1", isFeatured: true, price: 72.99},
        {name: "Widget 2", isFeatured: false, price: 149.99},
        {name: "Widget 3", isFeatured: true, price: 14.99},
        {name: "Widget 4", isFeatured: true, price: 50.99},
        {name: "Widget 5", isFeatured: false, price: 71.99},
        {name: "Widget 6", isFeatured: false, price: 65.99},
        {name: "Widget 7", isFeatured: false, price: 66},
        {name: "Widget 8", isFeatured: false, price: 165.99},
        {name: "Widget 9", isFeatured: true, price: 60.99},
        {name: "Widget 10", isFeatured: false, price: 6.99}
    ];

    
    WinJS.UI.Pages.define("/pages/chapter10/lst1011/lst1011.html", {
        ready: function (element, options) {
            WinJS.Namespace.define("lst1011.Converters", {
                isFeaturedToString: WinJS.Binding.converter(function (value) {
                    return (value ? "widget featured" : "widget");
                })
            });

            var productsList = element.querySelector("#productsList").winControl;
            productsList.itemDataSource = new WinJS.Binding.List(products).dataSource;
            productsList.itemTemplate = element.querySelector("#productItemTemplate");
            
        }
    });
})();
