import { Test, TestingModule } from '@nestjs/testing';
import { RemarkableService } from './remarkable.service';

describe('RemarkableService', () => {
  let service: RemarkableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemarkableService],
    }).compile();

    service = module.get<RemarkableService>(RemarkableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
