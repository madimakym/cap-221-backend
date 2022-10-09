import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepository) { }

  async create(createProductDto: CreateProductDto) {
    const res = await
      this.productRepository.save(createProductDto);
    return res;
  }

  findAll() {
    const entityManager = getManager();
    const resp = entityManager.query("select product.id, product.libelle, product.price, product.description, product.image, categorie.libelle AS categorie FROM product, categorie WHERE product.categorieId = categorie.id")
    return resp;
  }


  async findOne(id: number) {
    const response = await this.productRepository.findOne({
      where: [{ "id": id }],
      relations: ["categorie"]
    });
    return response;
  }


  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
