(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/appendixB/lstb09/lstb09.html", {
        ready: function (element, options) {
var points = [0,1,3,7,10];
var container = element.querySelector("#container");

//transform the points and generate SVG
var result;
points.forEach(function (p) {
    result += format("    <circle class='circle' cx='{0}' cy='100' r='10'/>", (p * 94) + 30);
});

//add resulting SVG to the DOM
container.innerHTML = format(
    "<svg xmlns='http://www.w3.org/2000/svg' width='1000px' height='200px' >" +
    "  <g>" +
    "    <rect class='line' x='30' y='90' width='940' height='20'/>" +
    "    {0}" +
    "  </g>" +
    "</svg>", result);
        }
    });
})();
