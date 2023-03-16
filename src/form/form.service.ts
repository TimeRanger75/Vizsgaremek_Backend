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

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
