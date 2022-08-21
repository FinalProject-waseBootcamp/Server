import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { System } from 'src/dto/system.dto';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Post()
  async create(@Body() systemDto: System) {
    const system = await this.systemService.create(systemDto);
    return system;
  }

  @Get()
  async getByAdminId(@Query() query: { adminId: string }) {
    return this.systemService.findByAdminId(query.adminId);
  }

  @Get(':id')
  async getByUid(@Param('id') id: string) {
    return this.systemService.findByUid(id);
  }

  @Put(':uid')
  async update(@Param('uid') uid: string, @Body() systemDto: System){
    console.log('controller: ',systemDto);
    return this.systemService.updateSystem(uid, systemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.systemService.delete(id);
  }
}
