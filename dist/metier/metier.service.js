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
exports.MetierService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const metier_entity_1 = require("./entities/metier.entity");
let MetierService = class MetierService {
    constructor(metierRepository) {
        this.metierRepository = metierRepository;
    }
    create(createMetierDto) {
        const res = this.metierRepository.save(createMetierDto);
        return res;
    }
    findAll() {
        return this.metierRepository.find();
    }
    findByGroupe(groupe) {
        return this.metierRepository.find({
            where: [{ "groupe": groupe }]
        });
    }
    findOne(id) {
        return this.metierRepository.findOne(+id);
    }
    update(id, updateMetierDto) {
        return this.metierRepository.update(id, updateMetierDto);
    }
    remove(id) {
        return this.metierRepository.delete(id);
    }
};
MetierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(metier_entity_1.Metier)),
    __metadata("design:paramtypes", [Object])
], MetierService);
exports.MetierService = MetierService;
//# sourceMappingURL=metier.service.js.map