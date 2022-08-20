import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { log } from 'console';
import { System } from 'src/dto/system.dto';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Post()
  async create(@Body() systemrDto: System) {
    const system = await this.systemService.create(systemrDto);
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

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.systemService.delete(id);
  }
}
