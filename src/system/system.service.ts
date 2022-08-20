import { Injectable, NotFoundException } from '@nestjs/common';
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
    console.log('created system in service' + createdSystem);
    return createdSystem;
  }

  async findByAdminId(id: string): Promise<System[]> {
    {
      try {
        const systems = await this.systemModel.find({ adminId: id }).exec();
        return systems;
      } catch (error) {
        throw new NotFoundException('not found');
      }
    }
  }

  async findByUid(uid: string): Promise<System> {
    try {
      const system = await this.systemModel.findById({uid}).exec();
      return system;
    } catch (error) {
      throw new NotFoundException('not found');
    }
  }

  async delete(id: string) {
    const deletedSystem = await this.systemModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedSystem;
  }
}
