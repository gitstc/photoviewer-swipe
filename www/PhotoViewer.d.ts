declare var exec: any;
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
declare class PhotoViewer {
    static initialOptionState: IPhotoViewerOptions;
    static show(pictures: {
        url: string;
        title: string;
    }[], options?: IPhotoViewerOptions): void;
}
//# sourceMappingURL=PhotoViewer.d.ts.map