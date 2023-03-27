import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(createArticleDto: CreateArticleDto): any;
    findAll(): any;
    findByCategory(name: string): any;
    findOne(id: string): any;
    findAllSimple(): any;
    findByGroupe({ groupe }: {
        groupe: any;
    }): any;
    update(id: string, updateArticleDto: UpdateArticleDto): any;
    remove(id: string): any;
}
