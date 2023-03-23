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

  async findAll() {
    return await this.dataSource.getRepository(Record).find();
  }

  findOne(id: number) {
    return `This action returns a #${id} record`;
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return `This action updates a #${id} record`;
  }

  remove(id: number) {
    return `This action removes a #${id} record`;
  }
}
