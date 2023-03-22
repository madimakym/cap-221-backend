import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { configuration } from "./config/configuration";
import { CategorieModule } from './categorie/categorie.module';
import { ProductModule } from "./product/product.module";
import { AuthModule } from "./auth/auth.module";
import { MediaModule } from "./media/media.module";
import { UploadModule } from "./upload/upload.module";
import { MetierModule } from './metier/metier.module';
import { ArticleModule } from "./article/article.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    AuthModule,
    CategorieModule,
    ArticleModule,
    MetierModule,
    ProductModule,
    UserModule,
    UploadModule,
    ConfigModule,
    MediaModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
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
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }