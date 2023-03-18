import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from '../assets/product/item/item.module';
import { TypeModule } from '../assets/product/type/type.module';
import { SubtypeModule } from '../assets/product/subtype/subtype.module';
import { CategoryModule } from '../assets/product/category/category.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'postgres',
      entities: [],
      synchronize: true,
    }),
    ItemModule,
    TypeModule,
    SubtypeModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
