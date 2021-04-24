import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Injectable()
export class SectionsService {
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

  async deleteSectionById(sectionId: number) {
    const response = await this.httpService
      .delete(`${this.baseUrl}/sections/${sectionId}`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }

  async updateSectionById(
    sectionId: number,
    updatesectionDto: UpdateSectionDto,
  ) {
    const response = await this.httpService
      .post(
        `${this.baseUrl}/sections/${sectionId}`,
        { ...updatesectionDto },
        {
          headers: this.headers,
        },
      )
      .toPromise();

    return response.data;
  }

  async getSectionById(sectionId: number) {
    const response = await this.httpService
      .get(`${this.baseUrl}/sections/${sectionId}`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }

  async getSections(projectId: number) {
    const response = await this.httpService
      .get(`${this.baseUrl}/sections?project_id=${projectId}`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }
  async createSection(createSectionDto: CreateSectionDto) {
    const response = await this.httpService
      .post(
        `${this.baseUrl}/sections`,
        { ...createSectionDto },
        {
          headers: this.headers,
        },
      )
      .toPromise();

    return response.data;
  }
}
