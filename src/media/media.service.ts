import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './entities/media.entity';

@Injectable()
export class MediaService {
  constructor(@InjectRepository(Media) private mediaRepository) { }

  create(createMediaDto: CreateMediaDto) {
    return this.mediaRepository.save(createMediaDto);
  }

  findAll() {
    return this.mediaRepository.find()
  }

  findOne(id: number) {
    return this.mediaRepository.findOne(id);
  }

  findByProduct(id: string) {
    return this.mediaRepository.find({
      where: [{ "product": id }]
    });
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return this.mediaRepository.update(id, updateMediaDto);
  }

  remove(id: number) {
    return this.mediaRepository.delete(id);
  }
}
