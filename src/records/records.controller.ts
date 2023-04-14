import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Headers,
  UseGuards,
  Request
} from '@nestjs/common';
import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './entities/record.entity';
import { AuthGuard } from '@nestjs/passport';
import { Users } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';

@Controller('records')
export class RecordsController {
  constructor(
    private readonly recordsService: RecordsService,
    private dataSource: DataSource,
  ) {}

  @Post()
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordsService.create(createRecordDto);
  }


  @Get()
  @UseGuards(AuthGuard('bearer'))
  async getLogged(@Request() req) {
    return this.recordsService.findOne(req.user);
  }
}
