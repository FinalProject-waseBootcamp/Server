import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Requests } from 'src/dto/requests.dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel('Requests')
    private readonly RequestsModel: Model<Requests>,
  ) {}

  async create(RequestsDto: Requests) {
    try {
      const createdRequest = await this.RequestsModel.create(RequestsDto);
      console.log('createdRequest', createdRequest);
      return createdRequest;
    } catch (err) {
      console.log(err);
    }
  }

  async findAll() {
    const requests = await this.RequestsModel.find().exec();
    return requests;
  }
  async getRequestsById(systemId: string) {
    const request = await this.RequestsModel.findById(systemId).exec();
    return request;
  }
  async updateRequest(uid: string, requests: Requests): Promise<Requests> {
    try {
      console.log('requests: ', requests);
      const updatedrequest = await this.RequestsModel.findByIdAndUpdate(
        uid,
        requests,
      ).exec();
      console.log('updated requests: ' + updatedrequest);
      return updatedrequest;
    } catch (error) {
      throw new NotFoundException('update request service error');
    }
  }

  async delete(id: string) {
    const deletedRequests = await this.RequestsModel.findByIdAndRemove({
      _id: id,
    }).exec();
    return deletedRequests;
  }
}
