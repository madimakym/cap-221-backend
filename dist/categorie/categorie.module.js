"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieModule = void 0;
const common_1 = require("@nestjs/common");
const categorie_service_1 = require("./categorie.service");
const categorie_controller_1 = require("./categorie.controller");
const typeorm_1 = require("@nestjs/typeorm");
const categorie_entity_1 = require("./entities/categorie.entity");
let CategorieModule = class CategorieModule {
};
CategorieModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([categorie_entity_1.Categorie])],
        controllers: [categorie_controller_1.CategorieController],
        providers: [categorie_service_1.CategorieService]
    })
], CategorieModule);
exports.CategorieModule = CategorieModule;
//# sourceMappingURL=categorie.module.js.map