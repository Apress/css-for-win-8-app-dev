WinJS.Namespace.define("lst1012.Controls", {
    Address: WinJS.Class.define(
        function (element) {
            element.innerHTML =
                "Address: <input class='abc-address' style='width:300px;'/><br/>" +
                "City/St/Zip: <input class='abc-city'/><select class='abc-state'><option></option><option>Alabama</option><option>Alaska</option><option>...</option></select><input class='abc-zip' style='width:80px;'/><br/>";
        }
    )
});
