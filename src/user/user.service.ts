import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private dataSource: DataSource) {}

  async create(createUserDto: CreateUserDto) {
    const user = Object.assign(new Users(), createUserDto);
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    const users: Users[] = await this.dataSource.getRepository(Users).find();
    let used = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == user.email) {
        used = true;
      }
    }
    console.log(used);
    if (used == true) {
      throw new HttpException('Email is already in use', HttpStatus.CONFLICT);
    } else {
      this.dataSource.getRepository(Users).save(user);
    }
  }

  async findAll() {
    const userRepo = await this.dataSource.getRepository(Users);
    return await userRepo
      .createQueryBuilder()
      .select(['username, email, name'])
      .getRawMany();
  }
}
