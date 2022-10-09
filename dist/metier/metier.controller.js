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
exports.MetierController = void 0;
const common_1 = require("@nestjs/common");
const metier_service_1 = require("./metier.service");
const create_metier_dto_1 = require("./dto/create-metier.dto");
const update_metier_dto_1 = require("./dto/update-metier.dto");
let MetierController = class MetierController {
    constructor(metierService) {
        this.metierService = metierService;
    }
    create(createMetierDto) {
        return this.metierService.create(createMetierDto);
    }
    findAll() {
        return this.metierService.findAll();
    }
    findOne(id) {
        return this.metierService.findOne(+id);
    }
    update(id, updateMetierDto) {
        return this.metierService.update(+id, updateMetierDto);
    }
    remove(id) {
        return this.metierService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_metier_dto_1.CreateMetierDto]),
    __metadata("design:returntype", void 0)
], MetierController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MetierController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MetierController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_metier_dto_1.UpdateMetierDto]),
    __metadata("design:returntype", void 0)
], MetierController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MetierController.prototype, "remove", null);
MetierController = __decorate([
    (0, common_1.Controller)('api/v1/metier'),
    __metadata("design:paramtypes", [metier_service_1.MetierService])
], MetierController);
exports.MetierController = MetierController;
//# sourceMappingURL=metier.controller.js.map