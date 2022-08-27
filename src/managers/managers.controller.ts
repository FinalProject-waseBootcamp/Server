import { Body, Controller, Delete, Get, Param, Post, Put, Query, } from '@nestjs/common';
import { ManagersService } from 'src/managers/managers.service';
import { Managers } from 'src/dto/managers.dto';

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
  @Get()
  async getManagersBySystemId(@Query() query: { systemId: string }) {
    return this.managersService.findBySystemId(query.systemId);
  }
 
  @Put(':id')
  async update(@Param('id') id: string, @Body('manager') manager: Managers) {
    return this.managersService.updateManager(id, manager);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.managersService.delete(id);
  }
}
