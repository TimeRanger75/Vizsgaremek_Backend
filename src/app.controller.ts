import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Admin, Foods } from './user.entity';
import * as bcrypt from 'bcrypt';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}


  @Post('/admin')
  async adminRegister(@Body() admin: Admin){
    admin.id = undefined;
    const adminRepo = this.dataSource.getRepository(Admin);
    adminRepo.save(admin);
  }

  @Post('/foods')
  async registerFood(@Body() food: Foods){
    food.id = undefined;
    const foodRepo = this.dataSource.getRepository(Foods);
    foodRepo.save(food);
  }


  @Get('/foods')
  async getFoods() {
    const foodRepo = this.dataSource.getRepository(Foods);
    return foodRepo.find();
  }
}
