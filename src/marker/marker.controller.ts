import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MarkerService } from './marker.service';
import { Marker } from 'src/dto/marker.dto';

@Controller('marker')
export class MarkerController {
  constructor(private readonly markerService: MarkerService) {}

  @Post()
  async create(@Body() markerDto: Marker) {
    await this.markerService.create(markerDto);
  }
  @Get()
  async getAllMarkers() {
    const markerList = await this.markerService.findAll();
    return markerList;
  }
  @Get()
  async getBySystemId(@Query() query: { systemId: string }) {
    return this.markerService.findBySystemId(query.systemId);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.markerService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body('marker') marker: Marker) {
    return this.markerService.updateMarker(id, marker);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.markerService.delete(id);
  }
}
