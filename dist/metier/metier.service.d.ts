import { CreateMetierDto } from './dto/create-metier.dto';
import { UpdateMetierDto } from './dto/update-metier.dto';
export declare class MetierService {
    private metierRepository;
    constructor(metierRepository: any);
    create(createMetierDto: CreateMetierDto): any;
    findAll(): any;
    findByGroupe(groupe: string): any;
    findOne(id: number): any;
    update(id: number, updateMetierDto: UpdateMetierDto): any;
    remove(id: number): any;
}
