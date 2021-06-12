// @ts-ignore
var exec = require("cordova/exec");

interface IPhotoViewerOptions {
  share?: boolean;
  closeButton?: boolean;
  copyToReference?: boolean;
  headers?: string;
  piccasoOptions?: {
    fit?: boolean;
    centerInside?: boolean;
    centerCrop?: boolean;
  };
}

class PhotoViewer {
  public static show(
    pictures: { url: string; title: string }[],
    options: IPhotoViewerOptions = {
      share: false,
      closeButton: true,
      copyToReference: false,
      headers: "",
      piccasoOptions: {
        fit: true,
        centerInside: true,
        centerCrop: false,
      },
    }
  ) {
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

    exec(
      function () {},
      function () {},
      "PhotoViewer",
      "show",
      args
    );
  }
}

// @ts-ignore
module.exports = PhotoViewer;
