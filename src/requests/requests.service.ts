import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {Requests} from 'src/dto/requests.dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel('Requests')
      private readonly RequestsModel: Model<Requests>,
      ) {}

  async create(RequestsDto: Requests) {
      const createdRequest = await this.RequestsModel.create(RequestsDto);
      console.log("createdRequest",createdRequest);
      return createdRequest;
  }

  async findAll() {
    const markers = await this.RequestsModel.find().exec();
    return markers;
  }
  async getRequestsById(systemId: string) {
    const markers = await this.RequestsModel.findById(systemId).exec();
    return markers;
  }
  async updateRequests(uid: string, requests: Requests): Promise<Requests> {
    try {
      console.log('requests: ',requests);
      const updatedrequests = await this.RequestsModel.findByIdAndUpdate(uid, requests).exec();
      console.log('updated requests: '+updatedrequests);
      return updatedrequests;
    } catch (error) {
      throw new NotFoundException('update marker service error');
    }
  }

  async delete(id: string) {
    const deletedRequests = await this.RequestsModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedRequests;
  }
}
