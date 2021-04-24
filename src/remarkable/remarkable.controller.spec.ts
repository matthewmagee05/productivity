import { Test, TestingModule } from '@nestjs/testing';
import { RemarkableController } from './remarkable.controller';
import { RemarkableService } from './remarkable.service';

describe('RemarkableController', () => {
  let controller: RemarkableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemarkableController],
      providers: [RemarkableService],
    }).compile();

    controller = module.get<RemarkableController>(RemarkableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
