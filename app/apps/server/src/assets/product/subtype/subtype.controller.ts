import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubtypeService } from './subtype.service';
import { SubtypeDto } from './dto/create-subtype.dto';
import { UpdateSubtypeDto } from './dto/update-subtype.dto';

@Controller('subtype')
export class SubtypeController {
  constructor(private readonly subtypeService: SubtypeService) {}

  @Post()
  create(@Body() createSubtypeDto: SubtypeDto) {
    return this.subtypeService.create(createSubtypeDto);
  }

  @Get()
  findAll() {
    return this.subtypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subtypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubtypeDto: UpdateSubtypeDto) {
    return this.subtypeService.update(+id, updateSubtypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subtypeService.remove(+id);
  }
}
