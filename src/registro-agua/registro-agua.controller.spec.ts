import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAguaController } from './registro-agua.controller';

describe('RegistroAguaController', () => {
  let controller: RegistroAguaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroAguaController],
    }).compile();

    controller = module.get<RegistroAguaController>(RegistroAguaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
