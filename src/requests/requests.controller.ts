import { Body, Controller, Delete, Get, Param, Post, Put, Query, } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { Requests } from 'src/dto/requests.dto';
import mongoose from 'mongoose';

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

  @Put(':id')
  async update(@Param('id') id: mongoose.Schema.Types.ObjectId, @Body('requests') request: Requests) {
    return this.requestsService.updateRequests(id, request);
  }
  @Delete(':id')
  async delete(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.requestsService.delete(id);
  }
}
