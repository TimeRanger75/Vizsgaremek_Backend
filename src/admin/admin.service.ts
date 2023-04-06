import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private dataSource:DataSource) {}

 async create(createAdminDto: CreateAdminDto) {
    const admin = Object.assign(new Admin(), createAdminDto);
    const salt = await bcrypt.genSalt();
    admin.password = await bcrypt.hash(admin.password, salt);
    this.dataSource.getRepository(Admin).save(admin);
    console.log(salt);
  }

 async findAll() {
    return await this.dataSource.getRepository(Admin).find();
  }

}
