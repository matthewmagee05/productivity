import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { LabelsController } from './labels/labels.controller';
import { LabelsService } from './labels/labels.service';
import { SectionsController } from './sections/sections.controller';
import { SectionsService } from './sections/sections.service';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [
    ProjectsController,
    TasksController,
    LabelsController,
    SectionsController,
  ],
  providers: [ProjectsService, TasksService, LabelsService, SectionsService],
})
export class TodoModule {}
