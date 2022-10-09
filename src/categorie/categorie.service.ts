import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './entities/categorie.entity';

@Injectable()
export class CategorieService {
  constructor(@InjectRepository(Categorie) private categorieRepository: Repository<Categorie>) { }
  create(createCategorieDto: CreateCategorieDto) {
    return this.categorieRepository.save(createCategorieDto);
  }

  findAll() {
    return this.categorieRepository.find()
  }

  findOne(id: number) {
    return this.categorieRepository.findOne(id);
  }

  update(id: number, updateCategorieDto: UpdateCategorieDto) {
    return this.categorieRepository.update(id, updateCategorieDto);
  }

  remove(id: number) {
    return this.categorieRepository.delete(id);
  }
}
