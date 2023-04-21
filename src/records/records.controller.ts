import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  @ApiOperation({
    description: 'Létrehoz egy naplózást',
  })
  @ApiCreatedResponse({
    description: 'Sikeresen létrehozta a naplózást',
  })
  @ApiBadRequestResponse({
    description: 'A naplózás nem jött létre',
  })
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordsService.create(createRecordDto);
  }

  @Get()
  @ApiOperation({
    description: 'Visszaadja a felhasználóhoz tartozó naplózást',
  })
  @ApiOkResponse({
    description: 'Sikeresen visszaadja a naplózást',
  })
  @ApiUnauthorizedResponse({
    description: 'Nincs bejelentkezett felhasználó',
  })
  @UseGuards(AuthGuard('bearer'))
  async getLogged(@Request() req) {
    return this.recordsService.findOne(req.user);
  }
}
