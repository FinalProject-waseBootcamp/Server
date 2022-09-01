import { Body, Controller, Delete, Get, Param, Post, Put, Query, } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { Requests } from 'src/dto/requests.dto';

@Controller('request')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) { }

  @Post()
  async create(@Body() requestsDto: Requests) {
    try{
      const newRequest=await this.requestsService.create(requestsDto);
      return newRequest;
    }catch(err){console.log(err);}
  }
  @Get()
  async getAllRequests() {
    const requestsList = await this.requestsService.findAll();
    return requestsList;
  }
  @Get(':id')
  async getRequestsById(@Param('id') id: string) {
    const request = await this.requestsService.getRequestsById(id);
    return request;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() request: Requests) {
    return this.requestsService.updateRequest(id, request);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.requestsService.delete(id);
  }
}
