import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RemarkableService } from './remarkable.service';
import { CreateRemarkableDto } from './dto/create-remarkable.dto';
import { UpdateRemarkableDto } from './dto/update-remarkable.dto';

@Controller('remarkable')
export class RemarkableController {
  constructor(private readonly remarkableService: RemarkableService) {}

  @Post()
  create(@Body() createRemarkableDto: CreateRemarkableDto) {
    return this.remarkableService.create(createRemarkableDto);
  }

  @Get()
  findAll() {
    return this.remarkableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remarkableService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRemarkableDto: UpdateRemarkableDto) {
    return this.remarkableService.update(+id, updateRemarkableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remarkableService.remove(+id);
  }
}
