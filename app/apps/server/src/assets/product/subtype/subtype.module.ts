import { Module } from '@nestjs/common';
import { SubtypeService } from './subtype.service';
import { SubtypeController } from './subtype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubtypeEntity } from './entities/subtype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubtypeEntity])],
  controllers: [SubtypeController],
  providers: [SubtypeService]
})
export class SubtypeModule {}
