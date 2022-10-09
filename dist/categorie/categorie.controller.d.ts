import { CategorieService } from './categorie.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
export declare class CategorieController {
    private readonly categorieService;
    constructor(categorieService: CategorieService);
    create(createCategorieDto: CreateCategorieDto): Promise<CreateCategorieDto & import("./entities/categorie.entity").Categorie>;
    findAll(): Promise<import("./entities/categorie.entity").Categorie[]>;
    findOne(id: string): Promise<import("./entities/categorie.entity").Categorie>;
    update(id: string, updateCategorieDto: UpdateCategorieDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
