import { Injectable } from '@nestjs/common';
import { CreateRemarkableDto } from './dto/create-remarkable.dto';
import { UpdateRemarkableDto } from './dto/update-remarkable.dto';

@Injectable()
export class RemarkableService {
  create(createRemarkableDto: CreateRemarkableDto) {
    return 'This action adds a new remarkable';
  }

  findAll() {
    return `This action returns all remarkable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} remarkable`;
  }

  update(id: number, updateRemarkableDto: UpdateRemarkableDto) {
    return `This action updates a #${id} remarkable`;
  }

  remove(id: number) {
    return `This action removes a #${id} remarkable`;
  }
}
