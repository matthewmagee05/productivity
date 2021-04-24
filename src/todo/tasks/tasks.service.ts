import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateTodoTaskDto } from './dto/create-todo-task.dto';
import { UpdateTodoTaskDto } from './dto/update-todo-task.dto';

@Injectable()
export class TasksService {
  apiKey: string = this.configService.get('TODOIST_API_KEY');
  baseUrl = 'https://api.todoist.com/rest/v1';

  headers = {
    'Content-Type': 'application/json', // afaik this one is not needed
    Authorization: `Bearer ${this.apiKey}`,
  };

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}
  async getTasks() {
    const response = await this.httpService
      .get(`${this.baseUrl}/tasks`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }

  async getTaskById(taskId: number) {
    const response = await this.httpService
      .get(`${this.baseUrl}/tasks/${taskId}`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }
  async createTask(createTodoTask: CreateTodoTaskDto) {
    const response = await this.httpService
      .post(
        `${this.baseUrl}/tasks`,
        { ...createTodoTask },
        {
          headers: this.headers,
        },
      )
      .toPromise();

    return response.data;
  }

  async updateTaskById(taskId: number, updateTodoTaskDto: UpdateTodoTaskDto) {
    const response = await this.httpService
      .post(
        `${this.baseUrl}/tasks/${taskId}`,
        { ...updateTodoTaskDto },
        {
          headers: this.headers,
        },
      )
      .toPromise();

    return response.data;
  }

  async closeTask(taskId: number) {
    const response = await this.httpService
      .post(
        `${this.baseUrl}/tasks/${taskId}/close`,
        {},
        {
          headers: this.headers,
        },
      )
      .toPromise();

    return response.data;
  }

  async deleteTaskById(taskId: number) {
    const response = await this.httpService
      .delete(`${this.baseUrl}/tasks/${taskId}`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }
}
