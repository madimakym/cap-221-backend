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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const user_entity_1 = require("../user/entities/user.entity");
const bcrypt = require("bcrypt");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const user_service_1 = require("../user/user.service");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async signup(user) {
        console.log(user);
        const resp = await this.authService.getByEmail(user.email);
        if (resp) {
            throw new common_1.NotAcceptableException("Adresse email existante");
        }
        else {
            return this.authService.signup(user);
        }
    }
    async signupCheck(user) {
        console.log(user);
        const resp = await this.authService.getByEmail(user.email);
        if (resp) {
            throw new common_1.NotAcceptableException("Adresse email existante");
        }
        else {
            return false;
        }
    }
    async login(user) {
        const resp = await this.authService.getByEmail(user.email);
        if (!resp) {
            throw new common_1.NotAcceptableException("Cet utilisateur n'existe pas!");
        }
        if (!(await bcrypt.compare(user.password, resp.password))) {
            throw new common_1.BadRequestException('Mot de passe incorrect!');
        }
        return this.authService.login(resp);
    }
    async check_user(user) {
        const resp = await this.userService.getByEmail(user.email);
        if (resp) {
            resp.password = undefined;
            return {
                status: common_1.HttpStatus.OK,
                message: resp,
            };
        }
        else {
            throw new common_1.NotAcceptableException("Cet utilisateur n'existe pas!");
        }
    }
    async authenticate(request) {
        const resp = await this.authService.getByToken(request.user.id);
        resp.password = undefined;
        return resp;
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.Users]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('register/check'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.Users]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signupCheck", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('check-user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "check_user", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "authenticate", null);
AuthController = __decorate([
    (0, common_1.Controller)('api/v1/auth/'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map