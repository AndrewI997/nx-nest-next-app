import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { ItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemEntity } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    public repository: Repository<ItemEntity>,
  ) { }
  async create(createItemDto: ItemDto) {
    return await this.repository.save(createItemDto);
  }

  async findAll() {
    return  await this.repository.find({
      relations: {
        type: true,
        subtype: true,
        category: true,
        images: true 
      }
    });
  }

  async findOne(id: number) {
    return await this.repository.find({
      where: {
        id
      },
      relations: {
        type: true,
        subtype: true,
        category: true,
        images: true 
      }
    });
  }

  async findByType( item: Partial<ItemDto>) {
    return await this.repository.find({
      where: {
        type: {
          id: item.typeId
        }
      },
      relations: {
        type: true,
        subtype: true,
        category: true,
        images: true 
      }
    });
  }

  async findBySubtype( item: Partial<ItemDto>) {
    return await this.repository.find({
      where: {
        subtype: {
          id: item.subtypeId
        }
      },
      relations: {
        type: true,
        subtype: true,
        category: true,
        images: true 
      }
    });
  }

  async findByCategory( item: Partial<ItemDto>) {
    return await this.repository.find({
      where: {
        category: {
          id: item.categoryId
        }
      },
      relations: {
        type: true,
        subtype: true,
        category: true,
        images: true 
      }
    });
  }

  async findByTypeSubtype( item: Partial<ItemDto>) {
    return await this.repository.find({
      where: {
        type: {
          id: item.typeId
        },
        subtype: {
          id: item.subtypeId
        }
      },
      relations: {
        type: true,
        subtype: true,
        category: true,
        images: true 
      }
    });
  }

  async findByTypeCategory( item: Partial<ItemDto>) {
    return await this.repository.find({
      where: {
        type: {
          id: item.typeId
        },
        category: {
          id: item.categoryId
        }
      },
      relations: {
        type: true,
        subtype: true,
        category: true,
        images: true 
      }
    });
  }

  async findBySubtypeCategory( item: Partial<ItemDto>) {
    return await this.repository.find({
      where: {
        type: {
          id: item.typeId
        },
        category: {
          id: item.categoryId
        }
      },
      relations: {
        type: true,
        subtype: true,
        category: true,
        images: true 
      }
    });
  }

  async findByTypeSubtypeCategory( item: Partial<ItemDto>) {
    return await this.repository.find({
      where: {
        type: {
          id: item.typeId
        },
        subtype: {
          id: item.subtypeId
        },
        category: {
          id: item.categoryId
        }
      },
      relations: {
        type: true,
        subtype: true,
        category: true,
        images: true 
      }
    });
  }

   async update(id: number, updateItemDto: UpdateItemDto) {
    return await `This action updates a #${id} item`;
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
