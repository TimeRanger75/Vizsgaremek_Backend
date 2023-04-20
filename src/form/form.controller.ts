import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Controller('calculator')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    return this.formService.create(createFormDto);
  }

  @Get('body/search')
  findlook() {
    return this.formService.findlook();
  }

  @Get('gender/search')
  findgender() {
    return this.formService.findgender();
  }

  @Get('age/search')
  findage() {
    return this.formService.findage();
  }
}
