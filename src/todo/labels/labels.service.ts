import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';

@Injectable()
export class LabelsService {
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

  async deleteLabelById(labelId: number) {
    const response = await this.httpService
      .delete(`${this.baseUrl}/labels/${labelId}`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }
  async updateLabelById(labelId: number, updateLabelDto: UpdateLabelDto) {
    const response = await this.httpService
      .post(
        `${this.baseUrl}/labels/${labelId}`,
        { ...updateLabelDto },
        {
          headers: this.headers,
        },
      )
      .toPromise();

    return response.data;
  }

  async getLabelById(labelId: number) {
    const response = await this.httpService
      .get(`${this.baseUrl}/labels/${labelId}`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }

  async getLabels() {
    const response = await this.httpService
      .get(`${this.baseUrl}/labels`, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }

  async createLabel(createLabelDto: CreateLabelDto) {
    const response = await this.httpService
      .post(
        `${this.baseUrl}/labels`,
        { ...createLabelDto },
        {
          headers: this.headers,
        },
      )
      .toPromise();

    return response.data;
  }
}
