import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity'; 

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private repository: Repository<CategoryEntity>,
  ) { }
  async create(createCategoryDto: CategoryDto) {
    return await this.repository.save(createCategoryDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.find({where: {id}});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await `This action updates a #${id} category`;
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
