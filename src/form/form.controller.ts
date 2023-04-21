import { Controller, Get, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('calculator')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  @ApiOperation({
    description: 'Feltölti a kérdőív válaszait',
  })
  @ApiCreatedResponse({
    description: 'Sikeresen feltöltötte a válaszokat',
  })
  @ApiBadRequestResponse({
    description: 'A válaszok nem jöttek létre nem jött létre',
  })
  create(@Body() createFormDto: CreateFormDto) {
    return this.formService.create(createFormDto);
  }

  @Get('body/search')
  @ApiOperation({
    description: 'Visszaadja a testalkatok darabszámát',
  })
  @ApiOkResponse({
    description: 'Sikeresen visszadta',
  })
  findlook() {
    return this.formService.findlook();
  }

  @Get('gender/search')
  @ApiOperation({
    description: 'Visszaadja a nem darabszámát',
  })
  @ApiOkResponse({
    description: 'Sikeresen visszadta',
  })
  findgender() {
    return this.formService.findgender();
  }

  @Get('age/search')
  @ApiOperation({
    description: 'Visszaadja a 25 felettiek és alattiak darabszámát. ',
  })
  @ApiOkResponse({
    description: 'Sikeresen visszadta',
  })
  findage() {
    return this.formService.findage();
  }
}
