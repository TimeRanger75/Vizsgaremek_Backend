import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private dataSource:DataSource){}
  
 async create(createUserDto: CreateUserDto) {
    const user=Object.assign(new Users(), createUserDto);
    this.dataSource.getRepository(Users).save(user);
  }

 async findAll() {
    return await this.dataSource.getRepository(Users).find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
