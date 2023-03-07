"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const categorie_module_1 = require("./categorie/categorie.module");
const product_module_1 = require("./product/product.module");
const auth_module_1 = require("./auth/auth.module");
const media_module_1 = require("./media/media.module");
const upload_module_1 = require("./upload/upload.module");
const metier_module_1 = require("./metier/metier.module");
const article_module_1 = require("./article/article.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            categorie_module_1.CategorieModule,
            article_module_1.ArticleModule,
            metier_module_1.MetierModule,
            product_module_1.ProductModule,
            upload_module_1.UploadModule,
            config_1.ConfigModule,
            media_module_1.MediaModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('db.host'),
                    port: configService.get('db.port'),
                    username: configService.get('db.user'),
                    password: configService.get('db.password'),
                    database: configService.get('db.database'),
                    entities: ['dist/**/*.entity.js'],
                    synchronize: true,
                    logging: false,
                }),
                inject: [config_1.ConfigService],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
                load: [configuration_1.configuration]
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map