import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { System } from 'src/dto/system.dto';

@Injectable()
export class SystemService {
    constructor(
        @InjectModel('System')
        private readonly systemModel: Model<System>,
      ) {}
    
      async create(systemDto: System) {
        const createdSystem = await this.systemModel.create(systemDto);
        return createdSystem;
      }
}
