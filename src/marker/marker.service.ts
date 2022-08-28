import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {Marker} from 'src/dto/marker.dto';
import * as admin from 'firebase-admin';

@Injectable()
export class MarkerService {
  constructor(
    @InjectModel('Marker')
      private readonly markerModel: Model<Marker>,
      ) {}

  async create(markerDto: Marker) {
      const createdMarker = await this.markerModel.create(markerDto);
      console.log("createdMarker",createdMarker);
      return createdMarker;
  }

  async findAll() {
    const markers = await this.markerModel.find().exec();
    return markers;
  }

  async findOne(id: mongoose.Schema.Types.ObjectId): Promise<Marker> {
    try {
      const marker = await this.markerModel.findById(id).exec();
      return marker;
    } catch (error) {
      throw new NotFoundException('marker not found');
    }
  }
  async findBySystemId(id: string): Promise<Marker[]> {
      try {
        const systems = await this.markerModel.find({ systemId: id }).exec();
        return systems;
      } catch (error) {
        throw new NotFoundException('not found');
      }
  }
  async updateMarker(uid: mongoose.Schema.Types.ObjectId, marker: Marker): Promise<Marker> {
    try {
      console.log('marker: ',marker);
      const updatedMarker = await this.markerModel.findByIdAndUpdate(uid, marker).exec();
      console.log('updated marker: '+updatedMarker);
      return updatedMarker;
    } catch (error) {
      throw new NotFoundException('update marker service error');
    }
  }

  async delete(id: mongoose.Schema.Types.ObjectId) {
    const deletedMarker = await this.markerModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedMarker;
  }
}
