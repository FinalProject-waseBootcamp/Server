import { Body, Controller, Delete, Get, Param, Post, Put, Query, } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { Requests } from 'src/dto/requests.dto';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) { }

  @Post()
  async create(@Body() requestsDto: Requests) {
    await this.requestsService.create(requestsDto);
  }
  @Get()
  async getAllRequests() {
    const markerList = await this.requestsService.findAll();
    return markerList;
  }
  @Get(':id')
  async getRequestsById(@Param('id') id: string) {
    const markerList = await this.requestsService.getRequestsById(id);
    return markerList;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body('requests') request: Requests) {
    return this.requestsService.updateRequests(id, request);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.requestsService.delete(id);
  }
}
