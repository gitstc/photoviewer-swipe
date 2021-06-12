"use strict";
// @ts-ignore
var exec = require("cordova/exec");
var PhotoViewer = /** @class */ (function () {
    function PhotoViewer() {
    }
    PhotoViewer.show = function (pictures, options) {
        if (options === void 0) { options = {
            share: false,
            closeButton: true,
            copyToReference: false,
            headers: "",
            piccasoOptions: {
                fit: true,
                centerInside: true,
                centerCrop: false,
            },
        }; }
        if (!pictures || pictures.length === 0) {
            // Do nothing
            return;
        }
        var args = [
            pictures,
            options.share,
            options.closeButton,
            options.copyToReference,
            options.headers,
            options.piccasoOptions,
        ];
        exec(function () { }, function () { }, "PhotoViewer", "show", args);
    };
    return PhotoViewer;
}());
// @ts-ignore
module.exports = PhotoViewer;
