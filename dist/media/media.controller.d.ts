import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    create(createMediaDto: CreateMediaDto): any;
    findAll(): any;
    findOne(id: string): any;
    findByProduct(id: string): any;
    update(id: string, updateMediaDto: UpdateMediaDto): any;
    remove(id: string): any;
}
