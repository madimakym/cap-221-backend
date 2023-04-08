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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_entity_1 = require("../user/entities/user.entity");
const user_service_1 = require("./user.service");
const bcrypt = require("bcrypt");
const jwt_service_1 = require("@nestjs/jwt/dist/jwt.service");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../mail/mail.service");
let UserController = class UserController {
    constructor(userService, jwtService, mailService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.mailService = mailService;
        this.configService = configService;
    }
    findAll() {
        return this.userService.findAll();
    }
    findByRegion() {
        return this.userService.groupByRegion();
    }
    async findOneById(params) {
        return await this.userService.findById(params.id);
    }
    async findGenre(params) {
        return await this.userService.getGenre(params.id);
    }
    async Update(id, data) {
        try {
            await this.userService.update(id, data);
            return {
                status: common_1.HttpStatus.OK,
                message: 'Updated successfully',
            };
        }
        catch (error) {
            return {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: error.message,
            };
        }
    }
    async changePassword(id, body) {
        const hashedPassword = await bcrypt.hash(body.password, 12);
        const data = Object.assign(Object.assign({}, body), { password: hashedPassword });
        try {
            await this.userService.update(id, data);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Updated successfully',
            };
        }
        catch (error) {
            return {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: error.message,
            };
        }
    }
    async resetPassword({ email }) {
        const user = await this.userService.getByEmail(email);
        try {
            if (user) {
                const payload = { id: user.id, email: user.email };
                const token = this.jwtService.sign(payload, {
                    secret: this.configService.get('jwt.secret'),
                    expiresIn: `3600s`
                });
                const url = `${this.configService.get('base_url')}/reset-password/?token=${token}`;
                const mail = await this.mailService.sendResetPassword(user.email, user.firstname, url);
                console.log("mail:", mail);
                return mail;
            }
            else {
                return {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    message: "Ce compte n'existe pas",
                };
            }
        }
        catch (error) {
            console.log("error:", error);
        }
    }
    async checkToken({ token }) {
        try {
            const resp = await this.jwtService.verify(token, {
                secret: this.configService.get('jwt.secret'),
            });
            return {
                statusCode: common_1.HttpStatus.OK,
                message: resp,
            };
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error);
        }
    }
    async search(params, req) {
        console.log("params ####");
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/region"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findByRegion", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)('genre/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findGenre", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.Users]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Update", null);
__decorate([
    (0, common_1.Put)(':id/change-password'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.Users]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('check-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkToken", null);
__decorate([
    (0, common_1.Get)('/search-user'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "search", null);
UserController = __decorate([
    (0, common_1.Controller)('api/v1/user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_service_1.JwtService,
        mail_service_1.MailService,
        config_1.ConfigService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map