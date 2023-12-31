import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioConfigService } from './usuarioconfig.service';

describe('UsuarioService', () => {
  let service: UsuarioConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioConfigService],
    }).compile();

    service = module.get<UsuarioConfigService>(UsuarioConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
