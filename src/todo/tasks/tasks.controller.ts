import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoTaskDto } from './dto/create-todo-task.dto';
import { UpdateTodoTaskDto } from './dto/update-todo-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Post()
  createTask(@Body() createTodoTask: CreateTodoTaskDto) {
    return this.taskService.createTask(createTodoTask);
  }

  @Post('close/:id')
  closeTask(@Param('id') taskId: number) {
    return this.taskService.closeTask(taskId);
  }

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') taskId: number) {
    return this.taskService.getTaskById(taskId);
  }

  @Put(':id')
  updateTaskById(
    @Param('id') taskId: number,
    @Body() updateTodoTaskDto: UpdateTodoTaskDto,
  ) {
    return this.taskService.updateTaskById(taskId, updateTodoTaskDto);
  }

  @Delete(':id')
  deleteTaskById(@Param('id') taskId: number) {
    return this.taskService.deleteTaskById(taskId);
  }
}
