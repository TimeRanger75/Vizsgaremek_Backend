import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Admin, Users } from './user.entity';
import * as bcrypt from 'bcrypt';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Post('/register')
  async registerUser(@Body() user: Users) {
    user.id = undefined;
    const userRepo = this.dataSource.getRepository(Users);
    userRepo.save(user);
  }

  @Post('/admin')
  async adminRegister(@Body() admin: Admin){
    admin.id = undefined;
    const adminRepo = this.dataSource.getRepository(Admin);
    adminRepo.save(admin);
  }

  @Get('/users')
  async getUsers() {
    const userRepo = this.dataSource.getRepository(Users);
    return userRepo.find();
  }

}
