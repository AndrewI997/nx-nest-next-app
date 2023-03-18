import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ItemEntity } from './entities/item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity]),
    MulterModule.register({
      dest: './dist/images',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'dist/images')
    }),
  ],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
