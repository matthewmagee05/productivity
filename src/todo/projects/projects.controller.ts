import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoProjectDto } from './dto/create-todo-project.dto';
import { UpdateTodoProjectDto } from './dto/update-todo-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  createProject(@Body() createTodoProject: CreateTodoProjectDto) {
    return this.projectsService.createProject(createTodoProject);
  }

  @Get()
  getProjects() {
    return this.projectsService.getProjects();
  }

  @Get(':id')
  getProjectById(@Param('id') projectId: number) {
    return this.projectsService.getProjectById(projectId);
  }

  @Put(':id')
  updateProject(
    @Param('id') projectId: number,
    @Body() updateProjectDto: UpdateTodoProjectDto,
  ) {
    return this.projectsService.updateProjectById(projectId, updateProjectDto);
  }

  @Delete(':id')
  deleteProject(@Param('id') projectId: number) {
    return this.projectsService.deleteProjectById(projectId);
  }
}
