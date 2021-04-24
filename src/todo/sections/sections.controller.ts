import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionService: SectionsService) {}

  @Post()
  createSection(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.createSection(createSectionDto);
  }

  @Get()
  getSections(@Query('project_id') projectId: number) {
    return this.sectionService.getSections(projectId);
  }

  @Get(':id')
  getSectionById(@Param('id') sectionId: number) {
    return this.sectionService.getSectionById(sectionId);
  }

  @Put(':id')
  updateeSctionById(
    @Param('id') sectionId: number,
    @Body() updatesectionDto: UpdateSectionDto,
  ) {
    return this.sectionService.updateSectionById(sectionId, updatesectionDto);
  }

  @Delete(':id')
  deleteSectionById(@Param('id') sectionId: number) {
    return this.sectionService.deleteSectionById(sectionId);
  }
}
