import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
    constructor(@InjectRepository(Article) private articleRepository) { }


    create(createArticleDto: CreateArticleDto) {
        return this.articleRepository.save(createArticleDto);
    }

    findAll() {
        return this.articleRepository.find();
    }

    findAllSimple() {
        return this.articleRepository.findAll();
    }

    findByGroupe(groupe: string) {
        return this.articleRepository.find({
            where: [{ "groupe": groupe }]
        });
    }

    findOne(id: number) {
        return this.articleRepository.findOne(+id);
    }

    update(id: number, updateArticleDto: UpdateArticleDto) {
        return this.articleRepository.update(id, updateArticleDto);
    }

    remove(id: number) {
        return this.articleRepository.delete(id);
    }
}
