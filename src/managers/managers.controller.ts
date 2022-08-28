import { Body, Controller, Delete, Get, Param, Post, Put, Query, } from '@nestjs/common';
import { ManagersService } from 'src/managers/managers.service';
import { Managers } from 'src/dto/managers.dto';
import mongoose from 'mongoose';

@Controller('managers')
export class ManagersController {
  constructor(private readonly managersService: ManagersService) { }

  @Post()
  async create(@Body() managersDto: Managers) {
    await this.managersService.create(managersDto);
  }
  @Get()
  async getAllManagers() {
    const markerList = await this.managersService.findAll();
    return markerList;
  }
  @Get(':id')
  async getManagersBySystemId(@Query() query: { sId: mongoose.Schema.Types.ObjectId ,mId: mongoose.Schema.Types.ObjectId}) {
    return this.managersService.findByIds(query.sId,query.mId);
  }
 
  @Put(':id')
  async update(@Param('id') id: mongoose.Schema.Types.ObjectId, @Body('manager') manager: Managers) {
    return this.managersService.updateManager(id, manager);
  }
  @Delete(':id')
  async delete(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.managersService.delete(id);
  }
}
