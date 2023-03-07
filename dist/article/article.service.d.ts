import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticleService {
    private articleRepository;
    constructor(articleRepository: any);
    create(createArticleDto: CreateArticleDto): any;
    findAll(name: String): any;
    findAllSimple(): any;
    findByGroupe(groupe: string): any;
    findOne(id: number): any;
    update(id: number, updateArticleDto: UpdateArticleDto): any;
    remove(id: number): any;
}
