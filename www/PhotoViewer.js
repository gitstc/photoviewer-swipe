"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// @ts-ignore
var exec = require("cordova/exec");
var PhotoViewer = /** @class */ (function () {
    function PhotoViewer() {
    }
    PhotoViewer.show = function (pictures, options) {
        if (options === void 0) { options = PhotoViewer.initialOptionState; }
        options = __assign(__assign({}, this.initialOptionState), options);
        if (!pictures || pictures.length === 0) {
            // Do nothing
            return;
        }
        var args = [
            pictures,
            options.startIndex,
            options.share,
            options.closeButton,
            options.copyToReference,
            options.headers,
            options.piccasoOptions,
        ];
        exec(function () { }, function () { }, "PhotoViewer", "show", args);
    };
    PhotoViewer.initialOptionState = {
        share: false,
        closeButton: true,
        copyToReference: false,
        headers: "",
        startIndex: 0,
        piccasoOptions: {
            fit: true,
            centerInside: true,
            centerCrop: false,
        },
    };
    return PhotoViewer;
}());
// @ts-ignore
module.exports = PhotoViewer;
