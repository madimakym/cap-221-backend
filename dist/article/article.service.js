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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const article_entity_1 = require("./entities/article.entity");
let ArticleService = class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    create(createArticleDto) {
        return this.articleRepository.save(createArticleDto);
    }
    findAll() {
        return this.articleRepository.find();
    }
    findByCategory(name) {
        if (name === 'TOUS') {
            return this.articleRepository.find();
        }
        else {
            return this.articleRepository.find({
                where: [{ "category": name }]
            });
        }
    }
    findAllSimple() {
        return this.articleRepository.findAll();
    }
    findByGroupe(groupe) {
        return this.articleRepository.find({
            where: [{ "groupe": groupe }]
        });
    }
    findOne(id) {
        return this.articleRepository.findOne(+id);
    }
    update(id, updateArticleDto) {
        return this.articleRepository.update(id, updateArticleDto);
    }
    remove(id) {
        return this.articleRepository.delete(id);
    }
};
ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(article_entity_1.Article)),
    __metadata("design:paramtypes", [Object])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map