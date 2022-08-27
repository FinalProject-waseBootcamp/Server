import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Managers} from 'src/dto/managers.dto';

@Injectable()
export class ManagersService {
  constructor(
    @InjectModel('Managers')
      private readonly managersModel: Model<Managers>,
      ) {}

  async create(managersDto: Managers) {
      const createdManagers = await this.managersModel.create(managersDto);
      console.log("createdManager",createdManagers);
      return createdManagers;
  }

  async findAll() {
    const markers = await this.managersModel.find().exec();
    return markers;
  }

  async findOne(id: string): Promise<Managers> {
    try {
      const manager = await this.managersModel.findById(id).exec();
      return manager;
    } catch (error) {
      throw new NotFoundException('not found', error);
    }
  }
  async findBySystemId(id: string): Promise<Managers[]> {
    {
      try {
        const systems = await this.managersModel.find({ systemId: id }).exec();
        return systems;
      } catch (error) {
        throw new NotFoundException('not found',error);
      }
    }
  }
  async updateManager(uid: string, manager: Managers): Promise<Managers> {
    try {
      console.log('manager: ',manager);
      const updatedmanager = await this.managersModel.findByIdAndUpdate(uid, manager).exec();
      console.log('updated manager: '+updatedmanager);
      return updatedmanager;
    } catch (error) {
      throw new NotFoundException('update marker service error');
    }
  }

  async delete(id: string) {
    const deletedMarker = await this.managersModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedMarker;
  }
}
