import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { LabelsService } from './labels.service';

@Controller('labels')
export class LabelsController {
  constructor(private readonly labelService: LabelsService) {}

  @Post()
  createLabel(@Body() createLabelDto: CreateLabelDto) {
    return this.labelService.createLabel(createLabelDto);
  }

  @Get()
  getLabels() {
    return this.labelService.getLabels();
  }

  @Get(':id')
  getLabelById(@Param('id') labelId: number) {
    return this.labelService.getLabelById(labelId);
  }

  @Put(':id')
  updateLabelById(
    @Param('id') labelId: number,
    @Body() updateLabelDto: UpdateLabelDto,
  ) {
    return this.labelService.updateLabelById(labelId, updateLabelDto);
  }

  @Delete(':id')
  deleteLabelById(@Param('id') labelId: number) {
    return this.labelService.deleteLabelById(labelId);
  }
}
