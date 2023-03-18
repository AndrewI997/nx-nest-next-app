import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { TypeEntity } from './entities/type.entity';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(TypeEntity)
    private repository: Repository<TypeEntity>,
  ) { }

  async create(createTypeDto: TypeDto) {
    return await this.repository.save(createTypeDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.find({where:{id}});
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return `This action updates a #${id} type`;
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
