import { Body, Controller, Delete, Get, Param, Post, Put, Query, } from '@nestjs/common';
import { ManagersService } from 'src/managers/managers.service';
import { Manager } from 'src/dto/managers.dto';
import mongoose from 'mongoose';

@Controller('manager')
export class ManagersController {
  constructor(private readonly managersService: ManagersService) { }

  @Post()
  async create(@Body() managersDto: Manager) {
    const newManager = await this.managersService.create(managersDto);
    return newManager;
  }
  @Get()
  async getAllManagers() {
    const markerList = await this.managersService.findAll();
    return markerList;
  }
  @Get(':id')
  async getManagersBySystemId(@Query() query: { sId: string ,mId: string}) {
    return this.managersService.findByIds(query.sId,query.mId);
  }
 
  @Put(':id')
  async update(@Param('id') id: mongoose.Schema.Types.ObjectId, @Body('manager') manager: Manager) {
    return this.managersService.updateManager(id, manager);
  }
  @Delete(':id')
  async delete(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.managersService.delete(id);
  }
}
