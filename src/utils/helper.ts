export class Helper {
    static customFileName(req, file, cb) {
        // let fileExtension = "";
        // if (file.mimetype.indexOf("jpeg") > -1) {
        //     fileExtension = "jpg"
        // } else if (file.mimetype.indexOf("png") > -1) {
        //     fileExtension = "png";
        // }
        // else if (file.mimetype.indexOf("png") > -1) {
        //     fileExtension = "png";
        // }
        // const originalName = file.originalname.split(".")[0];
        // cb(null, originalName + "." + fileExtension);
        // const originalName = file.originalname.split(".")[0];
        cb(null, file.originalname);
    }
    static destinationPath(req, file, cb) {
        cb(null, './uploads/')
    }
}