import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../dto/user.dto';
import * as admin from 'firebase-admin';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async create(userDto: User) {
    const { firstName,lastName, password, email, role } = userDto;
    const displayName=firstName+''+lastName;
    const createdUser = await this.userModel.create(userDto);
    const { uid } = await admin.auth().createUser({
      displayName,
      password,
      email
  })
  await admin.auth().setCustomUserClaims(uid, { role })
    return createdUser;
  }

  async findAll() {
  // await admin.messaging().sendToDevice(fcmtoken, payload);
    const user = await this.userModel.find().exec();
    return user;
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.userModel.findById(id).exec();
      return user;
    } catch (error) {
      throw new NotFoundException('not found');
    }
  }
  async updateUser(userId: string, firstName, lastName, email) {
    const updateUser = await this.findOne(userId);
    if (lastName) {
      updateUser.lastName = lastName;
    }
    if (firstName) {
      updateUser.firstName = firstName;
    }
    if (email) {
      updateUser.email = email;
    }
    updateUser.save();
  }

  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedUser;
  }

}
