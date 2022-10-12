import { MetierService } from './metier.service';
import { CreateMetierDto } from './dto/create-metier.dto';
import { UpdateMetierDto } from './dto/update-metier.dto';
export declare class MetierController {
    private readonly metierService;
    constructor(metierService: MetierService);
    create(createMetierDto: CreateMetierDto): any;
    findAll(): any;
    findByGroupe({ groupe }: {
        groupe: any;
    }): any;
    findOne(id: string): any;
    update(id: string, updateMetierDto: UpdateMetierDto): any;
    remove(id: string): any;
}
