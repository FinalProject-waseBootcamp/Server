import { Body, Controller, Post } from '@nestjs/common';
import { System } from 'src/dto/system.dto';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
    constructor(private readonly systemService: SystemService) { }
    @Post()
  async create(@Body() systemrDto: System) {
    await this.systemService.create(systemrDto);
  }
}
