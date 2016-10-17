(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter/chapter.html", {
        ready: function (element, options) {
            options || (options = {});

            var currentPackage = Windows.ApplicationModel.Package.current;

            q(".pagetitle").innerText = options.name;
            
            var main = q(".chapter section[role=main]");
            var listings = currentPackage.installedLocation.getFolderAsync("pages")
                .then(function(pagesFolder) { return pagesFolder.getFolderAsync(options.key); })
                .then(function(chapterFolder) { return chapterFolder.getFoldersAsync(); })
                .then(function(listingFolders) {
                    listingFolders.forEach(function(listingFolder) {
                        var listingDiv = document.createElement("div");
                        listingDiv.id = listingFolder.name;
                        var pagePath = format("/pages/{0}/{1}/{1}.html", options.key, listingFolder.name);
                        WinJS.xhr({ url: pagePath, responseType: "document" })
                        
                            //add the listing header
                            .then(function (xhr) {
                                var h2 = document.createElement("h2");
                                h2.innerText = q("title", xhr.response).innerText;
                                listingDiv.appendChild(h2);
                            })
                        
                            //render the body
                            .then(function() {
                                return WinJS.UI.Pages.render(pagePath, listingDiv);
                            })
                        
                            //remove the grid display (hack?)
                            .then(function (x) {
                                q(".fragment", x.element).style.display = "block";
                            });
                        
                        main.appendChild(listingDiv);
                    });
                    var chaser = document.createElement("div");
                    main.appendChild(chaser); //chaser to make the swiping work right
                });
        }
        
    });
})();
