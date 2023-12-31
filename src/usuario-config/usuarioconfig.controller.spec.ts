import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioConfigController } from './usuarioconfig.controller';

describe('UsuarioController', () => {
  let controller: UsuarioConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioConfigController],
    }).compile();

    controller = module.get<UsuarioConfigController>(UsuarioConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
