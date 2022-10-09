"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetierModule = void 0;
const common_1 = require("@nestjs/common");
const metier_service_1 = require("./metier.service");
const metier_controller_1 = require("./metier.controller");
const typeorm_1 = require("@nestjs/typeorm");
const metier_entity_1 = require("./entities/metier.entity");
let MetierModule = class MetierModule {
};
MetierModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([metier_entity_1.Metier])],
        controllers: [metier_controller_1.MetierController],
        providers: [metier_service_1.MetierService]
    })
], MetierModule);
exports.MetierModule = MetierModule;
//# sourceMappingURL=metier.module.js.map