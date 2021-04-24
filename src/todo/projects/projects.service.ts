import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateTodoProjectDto } from './dto/create-todo-project.dto';
import { UpdateTodoProjectDto } from './dto/update-todo-project.dto';

@Injectable()
export class ProjectsService {
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

  async getProjects() {
    const response = await this.httpService
      .get(`${this.baseUrl}/projects`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }

  async getProjectById(projectId: number) {
    const response = await this.httpService
      .get(`${this.baseUrl}/projects/${projectId}`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }

  async createProject(createTodoProject: CreateTodoProjectDto) {
    const response = await this.httpService
      .post(
        `${this.baseUrl}/projects`,
        { name: createTodoProject.name },
        {
          headers: this.headers,
        },
      )
      .toPromise();

    return response.data;
  }

  async updateProjectById(
    projectId: number,
    updateTodoProjectDto: UpdateTodoProjectDto,
  ) {
    const response = await this.httpService
      .post(
        `${this.baseUrl}/projects/${projectId}`,
        { ...updateTodoProjectDto },
        {
          headers: this.headers,
        },
      )
      .toPromise();

    return response.data;
  }

  async deleteProjectById(projectId: number) {
    const response = await this.httpService
      .delete(`${this.baseUrl}/projects/${projectId}`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }
}
