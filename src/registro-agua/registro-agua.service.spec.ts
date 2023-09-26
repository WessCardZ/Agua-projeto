import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAguaService } from './registro-agua.service';

describe('RegistroAguaService', () => {
  let service: RegistroAguaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroAguaService],
    }).compile();

    service = module.get<RegistroAguaService>(RegistroAguaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
