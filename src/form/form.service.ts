import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from './entities/form.entity';

@Injectable()
export class FormService {
  constructor(private dataSource: DataSource) {}

  async create(createFormDto: CreateFormDto) {
    const form = Object.assign(new Form(), createFormDto);
    this.dataSource.getRepository(Form).save(form);
  }

  async findAll() {
    return await this.dataSource.getRepository(Form).find();
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  async findlook() {
    const formRepo = this.dataSource.getRepository(Form);
    return await formRepo
      .createQueryBuilder()
      .select(['look, COUNT(look) as count'])
      .groupBy('look')
      .getRawMany();
  }

  async findgender() {
    const formRepo = this.dataSource.getRepository(Form);
    return await formRepo
      .createQueryBuilder()
      .select(['gender, COUNT(gender) as count'])
      .groupBy('gender')
      .getRawMany();
  }

  async findage() {
    const formRepo = this.dataSource.getRepository(Form);
    return await formRepo
      .createQueryBuilder()
      .select(`SUM(IF(form.age < 25, 1, 0))`, 'below_25')
      .addSelect(`SUM(IF(form.age >= 25, 1, 0))`, 'above_25')
      //.from(Form, 'form')
      .getRawOne();
  }
}
