import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
export declare class MediaService {
    private mediaRepository;
    constructor(mediaRepository: any);
    create(createMediaDto: CreateMediaDto): any;
    findAll(): any;
    findOne(id: number): any;
    findByProduct(id: string): any;
    update(id: number, updateMediaDto: UpdateMediaDto): any;
    remove(id: number): any;
}
