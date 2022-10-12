import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMetierDto } from './dto/create-metier.dto';
import { UpdateMetierDto } from './dto/update-metier.dto';
import { Metier } from './entities/metier.entity';

@Injectable()
export class MetierService {
  constructor(@InjectRepository(Metier) private metierRepository) { }


  create(createMetierDto: CreateMetierDto) {
    const res =
      this.metierRepository.save(createMetierDto);
    return res;
  }

  findAll() {
    return this.metierRepository.find();
  }

  findByGroupe(groupe: string) {
    return this.metierRepository.find({
      where: [{ "groupe": groupe }]
    });
  }

  findOne(id: number) {
    return this.metierRepository.findOne(+id);
  }

  update(id: number, updateMetierDto: UpdateMetierDto) {
    return this.metierRepository.update(id, updateMetierDto);
  }

  remove(id: number) {
    return this.metierRepository.delete(id);
  }
}
