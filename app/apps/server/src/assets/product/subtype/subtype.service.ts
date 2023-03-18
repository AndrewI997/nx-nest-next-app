import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubtypeDto } from './dto/create-subtype.dto';
import { UpdateSubtypeDto } from './dto/update-subtype.dto';
import { SubtypeEntity } from './entities/subtype.entity';


@Injectable()
export class SubtypeService {
  constructor(
    @InjectRepository(SubtypeEntity)
    private repository: Repository<SubtypeEntity>,
  ) { }
  async create(createSubtypeDto: SubtypeDto) {
    return await this.repository.save(createSubtypeDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.find({where: {id}});
  }

  async update(id: number, updateSubtypeDto: UpdateSubtypeDto) {
    return await `This action updates a #${id} subtype`;
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
