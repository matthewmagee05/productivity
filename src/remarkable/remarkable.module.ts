import { Module } from '@nestjs/common';
import { RemarkableService } from './remarkable.service';
import { RemarkableController } from './remarkable.controller';

@Module({
  controllers: [RemarkableController],
  providers: [RemarkableService]
})
export class RemarkableModule {}
