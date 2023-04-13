import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
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

  @Get(':id')
  findOne(@Param('id') id: Record) {
    return this.recordsService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async getLogged(@Req() req): Promise<Users> {
    const { id } = req.user;
    console.log(id);
    return this.dataSource.getRepository(Users).findOneBy({ id });
  }
}
