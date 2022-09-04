import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {Manager} from 'src/dto/managers.dto';

@Injectable()
export class ManagersService {
  constructor(
    @InjectModel('Manager')
      private readonly managersModel: Model<Manager>,
      ) {}

  async create(managersDto: Manager) {
      const createdManagers = await this.managersModel.create(managersDto);
      console.log("createdManager",createdManagers);
      return createdManagers;
  }

  async findAll() {
    const markers = await this.managersModel.find().exec();
    return markers;
  }

  async findByIds(system_id:string,user_id: string): Promise<Manager[]> {
    {
      try {
        const manager = await this.managersModel.find({systemId: system_id, user_id :user_id}).exec();
         return manager;
      } catch (error) {
        throw new NotFoundException('not found',error);
      }
    }
  }
  async updateManager(uid: mongoose.Schema.Types.ObjectId, manager: Manager): Promise<Manager> {
    try {
      console.log('manager: ',manager);
      const updatedmanager = await this.managersModel.findByIdAndUpdate(uid, manager).exec();
      console.log('updated manager: '+updatedmanager);
      return updatedmanager;
    } catch (error) {
      throw new NotFoundException('update manager service error');
    }
  }

  async delete(id: mongoose.Schema.Types.ObjectId) {
    const deletedManager = await this.managersModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedManager;
  }
}
