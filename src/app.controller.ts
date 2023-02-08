import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Users } from './user.entity';
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
    await bcrypt.hash(user.password, 10);
    const userRepo = this.dataSource.getRepository(Users);
    userRepo.save(user);
  }
}
