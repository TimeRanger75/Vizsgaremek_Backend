import { Injectable } from '@nestjs/common';
import { Users } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './entities/record.entity';

@Injectable()
export class RecordsService {
  constructor(private dataSource: DataSource) {}

  create(createRecordDto: CreateRecordDto) {
    const record = Object.assign(new Record(), createRecordDto);
    this.dataSource.getRepository(Record).save(record);
  }

  async findOne(user: Users) {
    const recordRepo = this.dataSource.getRepository(Record);
    return { records: await recordRepo.find({ where: { user: user } }) };
  }
  async getOne(id: number) {
    return this.dataSource.getRepository(Users).findOneBy({ id });
  }
}
