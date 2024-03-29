"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const helper_1 = require("../utils/helper");
let UploadController = class UploadController {
    uploadFile(file) {
        console.log('ok');
        return file;
    }
    uploadFileArticle(file) {
        console.log('ok');
        return file;
    }
    uploadMultiple(files) {
        return files;
    }
    async serveAvatar(fileId, res) {
        res.sendFile(fileId, { root: 'uploads' });
    }
};
__decorate([
    (0, common_1.Post)('api/v1/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: helper_1.Helper.destinationPath,
            filename: function (req, file, cb) {
                cb(null, 'img' + '-' + Date.now() + '.' + file.originalname.split('.').pop());
            }
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('api/v1/upload/article'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: helper_1.Helper.destinationPath,
            filename: function (req, file, cb) {
                cb(null, 'img' + '-' + Date.now() + '.' + file.name.split('.').pop());
            }
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFileArticle", null);
__decorate([
    (0, common_1.Post)('api/v1/uploads'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: helper_1.Helper.destinationPath,
            filename: helper_1.Helper.customFileName,
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadMultiple", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "serveAvatar", null);
UploadController = __decorate([
    (0, common_1.Controller)()
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map