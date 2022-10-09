"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
class Helper {
    static customFileName(req, file, cb) {
        cb(null, file.originalname);
    }
    static destinationPath(req, file, cb) {
        cb(null, './uploads/');
    }
}
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map