import { Repository } from 'typeorm';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './entities/categorie.entity';
export declare class CategorieService {
    private categorieRepository;
    constructor(categorieRepository: Repository<Categorie>);
    create(createCategorieDto: CreateCategorieDto): Promise<CreateCategorieDto & Categorie>;
    findAll(): Promise<Categorie[]>;
    findOne(id: number): Promise<Categorie>;
    update(id: number, updateCategorieDto: UpdateCategorieDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
