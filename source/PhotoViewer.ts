// @ts-ignore
var exec = require("cordova/exec");

interface IPhotoViewerOptions {
  share?: boolean;
  closeButton?: boolean;
  copyToReference?: boolean;
  headers?: string;
  startIndex?: number;
  piccasoOptions?: {
    fit?: boolean;
    centerInside?: boolean;
    centerCrop?: boolean;
  };
}

class PhotoViewer {
  static initialOptionState: IPhotoViewerOptions = {
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

  public static show(
    pictures: { url: string; title: string }[],
    options: IPhotoViewerOptions = PhotoViewer.initialOptionState
  ) {
    options = { ...this.initialOptionState, ...options };

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
