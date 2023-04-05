import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Record } from './entities/record.entity';

@Injectable()
export class RecordsService {
  constructor(private dataSource: DataSource) {}

  create(createRecordDto: CreateRecordDto) {
    const record = Object.assign(new Record(), createRecordDto);
    this.dataSource.getRepository(Record).save(record);
  }

  async findOne(id: number) {
   return await this.dataSource.getRepository(Record).createQueryBuilder('record')
   .select(['record.bodyWeight', 'record.workoutTime', 'record.date'])
  .innerJoin('record.user', 'user')
  .where('user.id = :userId', { userId: id })
  .getMany();
  }

}