import { Test, TestingModule } from '@nestjs/testing';
import { SubtypeController } from './subtype.controller';
import { SubtypeService } from './subtype.service';

describe('SubtypeController', () => {
  let controller: SubtypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubtypeController],
      providers: [SubtypeService],
    }).compile();

    controller = module.get<SubtypeController>(SubtypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
