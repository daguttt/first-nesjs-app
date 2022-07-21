import { Test, TestingModule } from '@nestjs/testing';
import { BasicCrudController } from './basic-crud.controller';

describe('BasicCrudController', () => {
  let controller: BasicCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasicCrudController],
    }).compile();

    controller = module.get<BasicCrudController>(BasicCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
